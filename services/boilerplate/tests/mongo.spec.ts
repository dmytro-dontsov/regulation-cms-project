import request from 'supertest';
import app from '../src/app';
import {connectDB, getDB, disconnectDB} from "@commons/mongo";

beforeAll(async () => {
    await connectDB();
})
beforeEach(async () => {
    await getDB().collection('test').deleteMany({});
})
afterAll(async () => {
    await getDB().collection('test').deleteMany({});
    await disconnectDB();
})
it('should return test data from mongo', async () => {
    await mockTestData();
    const response = await request(app).get('/mongo').expect(200);
    expect(response.body).toEqual([{_id: 1, name: 'test'}]);
});
const mockTestData = async () => {
    await getDB().collection<{_id: number; name: string}>('test').insertOne({_id: 1, name: 'test'});
}