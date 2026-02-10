import request from 'supertest';
import app from '../src/app';

it('should return Hello World!', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World!');
});

it('should throw status 500 for unexpected errors', async () => {
  const response = await request(app).get('/error');
  expect(response.status).toBe(500);
  expect(response.body).toEqual({ message: 'Internal Server Error' });
});

it('should return 404 for non-existing endpoints', async () => {
  const response = await request(app).get('/nonexistent').expect(404);
  expect(response.body).toEqual({
    type: 'NotFound',
    message: 'Endpoint GET /nonexistent not found',
  });
});

it('should return 400 for /failure endpoint', async () => {
  const response = await request(app).get('/failure').expect(400);
  expect(response.body).toEqual({
    type: 'Failure',
    message: 'This is a failure example',
  });
  console.error(process.env.SERVICE_NAME)
});

it.skip('should return failure for /async-error endpoint', async () => {
  const response = await request(app).get('/async-error').expect(400);
  expect(response.body).toEqual({
    type: 'Failure',
    message: 'This is an unexpected async error',
  });
});
