import album from "../models/album.js";


export const getAlbum = (req,res)=>{
    album.find().sort({_id:-1})
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((error)=>{
            res.status(403).json({message:error.message});
        })
}

export const addAlbum = (req,res)=>{
    const newAlbum = new album(req.body);
    newAlbum.save()
        .then((response)=>{
            res.status(201).json(newAlbum) 
        })
        .catch((error)=>{
            res.status(409).json({message:error.message})
        })
}