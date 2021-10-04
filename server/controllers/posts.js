import PostMessage from "../models/postMessage.js";

//functions de les routes
export const getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find(); //asynch function prque buscar algo porta temps, per aixo posem await i fem la funcio async
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}