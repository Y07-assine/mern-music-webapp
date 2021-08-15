import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    albumId:{
        type:String,
        required:true
    }
});

const album = mongoose.model('album',albumSchema);
export default album