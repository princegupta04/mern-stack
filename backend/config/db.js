import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();    

const connectDB = async () => {
  try {
   const response = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected", response.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
