import { Request, Response, NextFunction } from 'express';
import Failure from '.';

const failureMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Failure) {
    console.warn(
      `Endpoint ${req.method} ${req.url} responded with  status code ${err.responseCode}, error: ${err.message}, stack: ${err.stack}`
    );
    res.status(err.responseCode).json(err.getResponse());
  } else {
    console.error(
      `Endpoint ${req.method} ${req.url} responded with  status code 500, error: ${err.message}, stack: ${err.stack}`
    );
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default failureMiddleware;