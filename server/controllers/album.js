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
    if(!req.userId) return res.json({message:'Unauthenticated'});
    const newAlbum = new album(req.body);
    newAlbum.save()
        .then((response)=>{
            res.status(201).json(newAlbum) 
        })
        .catch((error)=>{
            res.status(409).json({message:error.message})
        })
}

export const deleteAlbum = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id:${id}`);

    await videoClip.findByIdAndRemove(id);

    res.json({message:"Item deleted successfully !"});
}