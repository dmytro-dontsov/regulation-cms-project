import { ZodSchema } from 'zod'
import { ValidationFailure } from '@commons/failure'

// should check if obj matches the schema and return the validated object or throw ValidationFailure if validation fails
export const validation = (obj: unknown, schema: ZodSchema) => {}