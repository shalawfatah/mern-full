import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DirectorSchema = Schema({
    name: String,
    bio: String,
    age: Number,
    picture: String
})

const Director = mongoose.model('Director', DirectorSchema)
export default Director
