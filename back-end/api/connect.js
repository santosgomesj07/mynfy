import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://user:Santos07@cluster0.lztbmh9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
