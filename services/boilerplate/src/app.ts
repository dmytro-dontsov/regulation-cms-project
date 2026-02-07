import express, { Request, Response } from 'express';
import { router as failureRouter } from './failures';
import {notFoundHandler} from "../../../common/failure/notFoundHandler";
import failureMiddleware from "../../../common/failure/failureMiddleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/', failureRouter);

app.use(notFoundHandler);
app.use(failureMiddleware);



export default app;

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}