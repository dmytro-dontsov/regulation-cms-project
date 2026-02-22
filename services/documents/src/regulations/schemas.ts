import * as z from 'zod'

export const RegulationsFilter = z.object({
  country: z.enum(['pl', 'ua']),
  leng: z.enum(['pl', 'uk']),
})