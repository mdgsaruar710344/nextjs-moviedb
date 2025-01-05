import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;

export async function connectMongodb() {
const mongoConnection=await  mongoose.connect(`${MONGODB_URI}`);
return mongoConnection;
}