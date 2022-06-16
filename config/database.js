import mongoose from "mongoose"

mongoose.connect(process.env.DATABASE_URL)

//shortcut to moongoose.connection object
const db = mongoose.connection

db.on('connected', function() {
    console.log('Connnected too MongoDB')
})