import { getDB } from '@commons/mongo'
import { Regulation, RegulationsFilter } from './types'

export const regulationCollection =
  getDB().collection<Regulation>('regulations')

export const findAll = async (filter: RegulationsFilter) => {
  return regulationCollection.find(filter).toArray()
}
