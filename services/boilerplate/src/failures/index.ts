import Failure from '@commons/failure';
import { Router } from 'express'

export const router = Router();

router.get('/failure', () => {
  throw new Failure('This is a failure example');
});

router.get('/error', () => {
  throw new Error('This is an unexpected error');
});

router.get('/async-error', async () => {
  const promise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Failure('This is an unexpected async error'));
    }, 100);
  });
  await promise;
});
