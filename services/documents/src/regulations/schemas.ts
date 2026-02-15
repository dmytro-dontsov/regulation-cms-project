import * as z from 'zod'

const RegulationsFilter = z.object({
  country: z.literal('pl', 'uk'),
  leng: z.literal('pl', 'uk'),
})