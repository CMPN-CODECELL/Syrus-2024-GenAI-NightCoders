const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MOngodb Connected ${mongoose.connection.host}`.bgGreen.white)
    }catch{
        console.log(`MOngodb Server Issue ${error}`.bgRed.white)
    }
}

module.exports = connectDB;