import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const videoClipSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    youtubeId:{
        type:String,
        required:true
    }
});

const videoClip = mongoose.model('videoClip',videoClipSchema);
export default videoClip