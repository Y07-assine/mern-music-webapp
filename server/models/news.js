import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    source:String,
},{timestamps:true});

const news = mongoose.model('news',newsSchema);
export default news;