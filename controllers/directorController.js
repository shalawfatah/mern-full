import Director from "../models/Director.js"

export const getAllDirectors = async (req, res) => {
    try {
        const allDirectors = await Director.find()
        await res.json(allDirectors)
    } catch (error) {
        console.log(error)
    }
}

export const getOneDirector = async (req, res) => {
    const {id} = req.params
    try {
        const oneDirector = await Director.findById({_id: id})
        if(!oneDirector) res.json('No such director registered')
        await res.json(oneDirector)        
    } catch (error) {
        console.log(error)
    }
}

export const postOneDirector = async (req, res) => {
    const {name, bio, age} = req.body
    try {
        const newDirector = await new Director({name, bio, age})
        const savedDirector = await newDirector.save()
        res.json(savedDirector)
    } catch (error) {
        console.log(error)
    }
}

export const deleteOneDirector = async (req, res) => {
    const {id} = req.params
    try {
        const deleteDirector = await Director.findByIdAndDelete({_id: id})
        res.json('Director Deleted')
    } catch (error) {
        console.log(error)
    }
}

export const updateOneDirector = async (req, res) => {
    const {name, bio, age} = req.body
    try {
        const updateDirector = await Director.findOneAndUpdate({_id:req.params.id}, {name, bio, age})
        await res.json(updateDirector)
    } catch (error) {
        console.log(error)
    }
}