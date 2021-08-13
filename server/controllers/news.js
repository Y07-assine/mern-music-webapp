import news from '../models/news.js';


export const getNews = (req,res)=>{
    news.find()
        .then((result)=>{
           res.status(200).json(result); 
        })
        .catch((error)=>{
            res.status(404).json({message:error.message});
        })
}

export const addNews = (req,res) =>{
    const Newnews = new news({
        title:req.body.title,
        creator:req.body.creator,
        body:req.body.body,
        source:req.body.source
    })
    if(req.file){
        Newnews.image= req.file.path
    }

    Newnews.save()
        .then((response)=>{
            res.status(201).json(Newnews) 
        })
        .catch((error)=>{
            res.status(409).json({message:error.message})
        })
}