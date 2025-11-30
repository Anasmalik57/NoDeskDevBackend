import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb+srv://dtteamworks_db:r0iFRs4oy1KQkfHo@cluster0.0c5zjgl.mongodb.net/nodeskdeveleper?appName=Cluster0"
    );
    console.log(`MongoDB Connected: 😃 ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

export default connectDB;