import { Request, Response } from 'express'
import { findAll } from '../repo'
import { mapToPublicRegulation } from '../mappers'
import { RegulationPublic } from '../types'

export const getAllRegulations = async (
  req: Request,
  res: Response<RegulationPublic[]>
) => {
  const { country, leng } = validation(req.query, RegulationsFilter)
  const regulations = await findAll()
  res.json(regulations.map(mapToPublicRegulation))
}
