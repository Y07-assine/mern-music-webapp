import quote from "../models/quote.js";

export const getQuotes = (req,res)=>{
    quote.find()
        .then((resultat)=>{
            res.status(200).json(result); 
        })
        .catch((error)=>{
            res.status(403).json({message:error.message});
        })
}

export const addQuote = (req,res)=>{
    const newQuote = new quote(req.body);
    newQuote.save()
    .then((response)=>{
        res.status(201).json(newQuote) 
    })
    .catch((error)=>{
        res.status(409).json({message:error.message})
    })
}