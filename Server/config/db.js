 import mongoose from "mongoose";

    const connectDB = async () => {
        try {
            const conn = await mongoose.connect("mongodb+srv://navajbloch420:A9RLT96fawL8Kbb6@cluster0.kloxkoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    }
    export default connectDB;