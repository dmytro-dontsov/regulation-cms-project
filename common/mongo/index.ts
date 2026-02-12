import { MongoClient, Db } from 'mongodb';

class MongoConnection {
    private static instance: MongoConnection;
    private client: MongoClient;
    private db: Db | null = null;

    private constructor() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_HOST,
            MONGO_PORT,
            SERVICE_NAME,
            NODE_ENV
        } = process.env;

        if (!MONGO_USER || !MONGO_PASSWORD || !MONGO_HOST || !MONGO_PORT || !SERVICE_NAME) {
            throw new Error('Missing MongoDB environment variables');
        }

        const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}?authSource=admin`;
        this.client = new MongoClient(url);

        const dbName = NODE_ENV === 'test' ? `test_${SERVICE_NAME}` : SERVICE_NAME;
        this.db = this.client.db(dbName);
    }

    public static getInstance(): MongoConnection {
        if (!MongoConnection.instance) {
            MongoConnection.instance = new MongoConnection();
        }
        return MongoConnection.instance;
    }

    public async connect(): Promise<void> {
        try {
            await this.client.connect();
            console.log('✅ Connected to MongoDB');
        } catch (error) {
            console.error('❌ Error connecting to MongoDB', error);
            throw error;
        }
    }

    public getDatabase(): Db {
        if (!this.db) {
            throw new Error('Database not initialized. Call connect() first.');
        }
        return this.db;
    }
}

export const connectDB = () => MongoConnection.getInstance().connect();
export const getDB = () => MongoConnection.getInstance().getDatabase();