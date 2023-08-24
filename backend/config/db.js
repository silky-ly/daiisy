const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error}`.red.underline);
        process.exit(1)
    }
}

module.exports = connectDB
