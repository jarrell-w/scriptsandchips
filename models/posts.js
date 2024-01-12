import mongoose, {Schema} from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    body: String
}, {timestamps:true});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post