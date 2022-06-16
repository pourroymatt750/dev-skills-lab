import mongoose from "mongoose"

const Schema = mongoose.Schema

//Create schema
const skillSchema = new Schema({
    text: String
})

//Compiles schema into model so it can be exported
const Skill = mongoose.model('Skill', skillSchema)

export {
    Skill
}