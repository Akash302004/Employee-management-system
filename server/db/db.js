import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
};

export default connectToDatabase;
