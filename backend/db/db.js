import { MongoClient } from "mongodb";
import 'dotenv/config'

const uri = process.env.MONGO_URI
const client = new MongoClient(uri);

export const db = client.db('chat');

try {
    await client.connect();
    console.log("DB connected");
} catch (e) {
    console.error(e);
    process.exit(1);
}

export const collection = db.collection("messages")