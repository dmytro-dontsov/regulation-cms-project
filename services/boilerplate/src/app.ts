import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '..', '.env')});
import express, { Request, Response } from 'express';
import { router as failureRouter } from './failures';
import { router as mongoRouter } from './mongo';
import {notFoundHandler} from "../../../common/failure/notFoundHandler";
import failureMiddleware from "../../../common/failure/failureMiddleware";
import {connectDB} from "../../../common/mongo";

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

const start = async () => {
  await connectDB();
  if (require.main === module) {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
start();
export default app;