import { ZodSchema } from 'zod'
import { ValidationFailure } from '@commons/failure';

// should check if obj matches the schema and return the validated object or throw ValidationFailure if validation fails
export const validation = <T,>(obj: unknown, schema: ZodSchema<T>): T => {
  const result = schema.safeParse(obj);

  if (!result.success) {
    throw new ValidationFailure(result.error.format());
  }

  return result.data as T;
}
