import express, { Request, Response } from 'express';
import failureMiddleware from '@commons/failure/middleware';
import { NotFoundFailure } from '@commons/failure';
import { router as failureRouter } from './failures';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/', failureRouter);

app.use((req: Request) => {
  throw new NotFoundFailure(`Endpoint ${req.method} ${req.url} not found`);
});
app.use(failureMiddleware);

export default app;

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}