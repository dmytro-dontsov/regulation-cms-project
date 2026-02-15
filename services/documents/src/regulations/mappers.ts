import { Regulation, RegulationPublic } from './types'

export const mapToPublicRegulation = (
  regulation: Regulation
): RegulationPublic => ({
  _id: regulation._id,
  category: regulation.category,
  activeFrom: regulation.activeFrom,
  title: regulation.title,
  content: regulation.content,
  activeTo: regulation.activeTo,
  publishAt: regulation.publishAt,
  createdAt: regulation.created.at,
  updatedAt: regulation.updated?.at,
  path: regulation.path,
})
