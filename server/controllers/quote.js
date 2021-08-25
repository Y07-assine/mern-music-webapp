import quote from "../models/quote.js";

export const getQuotes = (req,res)=>{
    quote.find().limit(1)
        .then((result)=>{
            res.status(200).json(result); 
        })
        .catch((error)=>{
            res.status(403).json({message:error.message});
        })
}

export const addQuote = (req,res)=>{
    if(!req.userId) return res.json({message:'Unauthenticated'});
    const newQuote = new quote(req.body);
    newQuote.save()
        .then((response)=>{
            res.status(201).json(newQuote) 
        })
        .catch((error)=>{
            res.status(409).json({message:error.message})
        })
}

export const deleteQuote = async (req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with id:${id}`);

    await videoClip.findByIdAndRemove(id);

    res.json({message:"Item deleted successfully !"});
}