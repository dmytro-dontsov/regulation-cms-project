import { Request, Response, NextFunction } from "express";
import {NotFoundFailure} from "./index";

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundFailure(`Endpoint ${req.method} ${req.url} not found`);
};