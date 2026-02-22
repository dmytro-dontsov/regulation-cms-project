import { ObjectId } from 'mongodb/mongodb'

export type Regulation = {
  _id: ObjectId
  category: 'buyer' | 'seller'
  path: string
  activeFrom: Day
  title: string
  leng: 'pl' | 'uk'
  country: 'pl' | 'ua'
  created: Updater
  content: RegulationContent
  activeTo?: Day
  publishAt?: Day
  updated?: Updater
  isDraft?: true
}

type Day = `${number}-${number}-${number}` // 01-01-2024

type Updater = { at: Date; by: { email: string } }

type RegulationContent = string

export type RegulationPublic = Pick<
  Regulation,
  | '_id'
  | 'category'
  | 'path'
  | 'activeFrom'
  | 'title'
  | 'content'
  | 'activeTo'
  | 'publishAt'
> & {
  createdAt: Date
  updatedAt?: Date
}

export type RegulationsFilter = Pick<Regulation, 'leng' | 'country'>
