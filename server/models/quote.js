import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
});

const quote = mongoose.model('quote',quoteSchema);
export default quote;