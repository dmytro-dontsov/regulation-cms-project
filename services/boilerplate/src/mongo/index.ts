import { Router, Response } from 'express'
import { getDB } from '@commons/mongo';

export const router = Router();
router.get('/mongo', async (_req, res: Response) => {
    const collection = await getDB().collection('test');
    res.json(await collection.find().toArray());
});

router.post('/mongo', async (req, res: Response) => {
    console.log('Received data for insertion:', req.body);
    const collection = await getDB().collection('test');
    const result = await collection.insertOne(req.body);
    res.json(result);
});
