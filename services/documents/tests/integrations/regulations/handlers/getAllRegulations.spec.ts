import request from 'supertest'
import { connectDB, disconnectDB } from '@commons/mongo'
import { regulationCollection } from '@regulations/repo'
import app from '@src/app'
import { regulationStub } from '@tests/fixtures/regulations'
import { ObjectId } from 'mongodb'
import { Regulation } from '@regulations/types'

beforeAll(async () => {
  await connectDB()
})

afterEach(async () => {
  await regulationCollection.deleteMany({})
})

afterAll(async () => {
  await disconnectDB()
})

it('should return regulations for country=pl and leng=pl', async () => {
  const regulations = await mockData()
  await regulationCollection.insertMany(regulations)
  const response = await request(app).get('/regulations?country=pl&leng=pl').expect(200)
  expect(response.body).toEqual([
    {
      _id: expect.any(String),
      activeFrom: '01-01-2024',
      category: 'buyer',
      content: 'Treść regulaminu',
      path: 'regulamin-1',
      title: 'Regulamin 1',
      createdAt: expect.any(String),
    },
    {
      _id: expect.any(String),
      activeFrom: '01-01-2024',
      category: 'buyer',
      content: 'Treść regulaminu',
      createdAt: expect.any(String),
      path: 'regulamin-2',
      title: 'Regulamin 2',
    },
  ])
})

it('should return regulations for country=ua and leng=uk', async () => {
  const regulations = await mockData()
  await regulationCollection.insertMany(regulations)
  const response = await request(app).get('/regulations?country=ua&leng=uk').expect(200)
  expect(response.body).toEqual([
    {
      _id: expect.any(String),
      activeFrom: '01-01-2024',
      category: 'buyer',
      content: 'Treść regulaminu',
      path: 'regulamin-3',
      title: 'Regulamin 3',
      createdAt: expect.any(String),
    },
    {
      _id: expect.any(String),
      activeFrom: '01-01-2024',
      category: 'buyer',
      content: 'Treść regulaminu',
      createdAt: expect.any(String),
      path: 'regulamin-4',
      title: 'Regulamin 4',
    },
  ])
})

it('should return 400 if country or leng is missing', async () => {})

it('should return 400 if country or leng has invalid value', async () => {})

const mockData = async (): Promise<Regulation[]> => {
  return [
    regulationStub,
    {
      ...regulationStub,
      _id: new ObjectId(),
      title: 'Regulamin 2',
      path: 'regulamin-2',
    } as Regulation,
    {
        ...regulationStub,
        _id: new ObjectId(),
        title: 'Regulamin 3',
        path: 'regulamin-3',
        country: 'ua',
        leng: 'uk',
    } as Regulation,
    {
        ...regulationStub,
        _id: new ObjectId(),
        title: 'Regulamin 4',
        path: 'regulamin-4',
        country: 'ua',
        leng: 'uk',
    } as Regulation,
  ]
}
