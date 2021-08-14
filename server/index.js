import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import newsRoutes from './routes/news.js';
import quoteRoutes from './routes/quote.js';

const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/news',newsRoutes);
app.use('/quote',quoteRoutes);
const CONNECTION_URL = 'mongodb+srv://yassine:tuto1234@cluster0.skstc.mongodb.net/music-app?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> app.listen(port,()=> console.log(`Server running on port: ${port}`)))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);