import news from '../models/news.js';


export const getNews = (req,res)=>{
    news.find().sort({createdAt:-1})
        .then((result)=>{
           res.status(200).json(result); 
        })
        .catch((error)=>{
            res.status(404).json({message:error.message});
        })
}

export const addNews = (req,res) =>{
    if(!req.userId) return res.json({message:'Unauthenticated'});
    const Newnews = new news({
        title:req.body.title,
        creator:req.body.creator,
        body:req.body.body,
        source:req.body.source
    })
    if(req.file){
        Newnews.image= req.file.filename
    }

    Newnews.save()
        .then((response)=>{
            res.status(201).json(Newnews) 
        })
        .catch((error)=>{
            res.status(409).json({message:error.message})
        })
}