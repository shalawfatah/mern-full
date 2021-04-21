import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DirectorSchema = Schema({
    name: String,
    bio: String,
    age: Number
})

const Director = mongoose.model('Director', DirectorSchema)
export default Director