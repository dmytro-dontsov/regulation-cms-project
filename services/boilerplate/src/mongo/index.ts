import { Router, Response } from 'express'
// import {getDB} from "../../../../common/mongo";

export const router = Router();

router.get('/mongo', async (_req, res: Response) => {
    // const collection = await getDB().collection('test');
    // res.json(await collection.find().toArray());
});
