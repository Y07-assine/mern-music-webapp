import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import newsRoutes from './routes/news.js';
import quoteRoutes from './routes/quote.js';
import albumRoutes from './routes/album.js';
import videoClipRoutes from "./routes/videoClip.js";
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/news',newsRoutes);
app.use('/quote',quoteRoutes);
app.use('/album',albumRoutes);
app.use('/videoclip',videoClipRoutes);
app.use('/user',userRoutes);
app.get('/',(req,res)=>{
    res.send('Apollo For Music ...');
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> app.listen(port,()=> console.log(`Server running on port: ${port}`)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);