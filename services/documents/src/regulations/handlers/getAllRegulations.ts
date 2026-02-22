import { Request, Response } from 'express'
import { findAll } from '../repo'
import { mapToPublicRegulation } from '../mappers'
import { RegulationPublic } from '../types'
import { validation } from '@commons/validation'
import { RegulationsFilter } from '../schemas'

export const getAllRegulations = async (
  req: Request,
  res: Response<RegulationPublic[]>
) => {
  const filter = validation(req.query, RegulationsFilter)
  const regulations = await findAll(filter)
  res.json(regulations.map(mapToPublicRegulation))
}
