import { ObjectId } from 'mongodb'
import { Regulation } from '../../src/regulations/types'

export const regulationStub: Regulation = {
  _id: new ObjectId(),
  category: 'buyer',
  activeFrom: '01-01-2024',
  title: 'Regulamin 1',
  leng: 'pl',
  country: 'pl',
  created: { at: new Date(), by: { email: 'test@example.com' } },
  content: 'Treść regulaminu',
  path: 'regulamin-1',
}
