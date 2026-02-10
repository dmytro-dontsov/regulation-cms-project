import { MongoClient } from 'mongodb';

const MONGO_USERNAME = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB_NAME = process.env.SERVICE_NAME;

if (!MONGO_USERNAME || !MONGO_PASSWORD || !MONGO_HOST || !MONGO_PORT || !MONGO_DB_NAME) {
    console.log(MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME);
    throw new Error(
        'Should set mongodb environment variables: MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_DB_NAME'
    );
}

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}?authSource=admin`;
const client = new MongoClient(url);

let db: ReturnType<typeof client.db>;

export const connectDB = async () => {
    const dbName = process.env.NODE_ENV === 'test' ? `test_${MONGO_DB_NAME}`: MONGO_DB_NAME;
    try {
        await client.connect();
        console.log('✅ connected to MongoDB');
        db = client.db(dbName);
    } catch (error) {
        console.error('❌ error connect to MongoDB', error);
        throw error;
    }
}
export const getDB = () => {
    if (!db) {
        throw new Error('Database not connected. Please call connectDB first.');
    }
    return db;
}