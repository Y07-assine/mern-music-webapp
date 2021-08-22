import videoClip from "../models/videoClip.js";

export const getVideoClip =(req,res)=>{
    videoClip.find()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((error)=>{
            res.status(403).json({message:error.message});
        })
}

export const addvideoClip = (req,res)=>{
    if(!req.userId) return res.json({message:'Unauthenticated'});
    const newVideoClip = new videoClip(req.body);
    newVideoClip.save()
        .then((response)=>{
            res.status(201).json(newVideoClip) 
        })
        .catch((error)=>{
            res.status(409).json({message:error.message})
        })
}