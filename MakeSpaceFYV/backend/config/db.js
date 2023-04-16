const mongoose = require('mongoose')

const connectDB = async () => {
    const uri = process.env.ATLAS_URI;
    console.log(uri);
    try {
        const conn = await mongoose.connect(uri)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB