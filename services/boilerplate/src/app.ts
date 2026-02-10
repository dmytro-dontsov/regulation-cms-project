import express, { Request, Response } from 'express';
import { router as failureRouter } from './failures';
import { router as mongoRouter } from './mongo';
import { notFoundHandler } from '@commons/failure/notFoundHandler';
import failureMiddleware from '@commons/failure/failureMiddleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/', failureRouter);
app.use('/', mongoRouter);

app.use(notFoundHandler);
app.use(failureMiddleware);

export const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;