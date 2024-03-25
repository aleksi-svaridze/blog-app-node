import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('success');
    } catch (error) {
        console.log(`Error - ${error}`);
        process.exit(1);
    }
}

export default connectDB;