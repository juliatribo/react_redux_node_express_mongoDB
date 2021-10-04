import mongoose from 'mongoose';

//schema es faa servir per una estructura igual per cada post
const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String, //convert image to string using base64
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema); //passar lesquema a module

export default PostMessage;