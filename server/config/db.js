import mongoose from 'mongoose'

export const db = async () => {
    const connection = await mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true, useUnifiedTopology:true})
}