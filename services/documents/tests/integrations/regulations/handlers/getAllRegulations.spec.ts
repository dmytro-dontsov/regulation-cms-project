import request from 'supertest'
import { connectDB, disconnectDB } from '@commons/mongo'
import { regulationCollection } from '../../../../src/regulations/repo'
import app from '../../../../src/app'
import { regulationStub } from '../../../fixtures/regulations'
import { ObjectId } from 'mongodb'

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
  await mockData()
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

it('should return regulations for country=pl and leng=pl', async () => {
  await mockData()
  await regulationCollection.insertMany(regulations)
  const response = await request(app).get('/regulations?country=ua&leng=uk').expect(200)
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

it('should return 400 if country or leng is missing', async () => {})

it('should return 400 if country or leng has invalid value', async () => {})

const mockData = async () => {
const regulations = [
    regulationStub,
    {
      ...regulationStub,
      _id: new ObjectId(),
      title: 'Regulamin 2',
      path: 'regulamin-2',
    },
    {
        ...regulationStub,
        _id: new ObjectId(),
        title: 'Regulamin 3',
        path: 'regulamin-3',
        country: 'ua',
        leng: 'uk',
    },
    {
        ...regulationStub,
        _id: new ObjectId(),
        title: 'Regulamin 4',
        path: 'regulamin-4',
        country: 'ua',
        leng: 'uk',
    },
  ]
}
