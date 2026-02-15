import { Router } from 'express'
import { getAllRegulations } from './handlers/getAllRegulations'

export const router = Router()

router.get('/', getAllRegulations)
