import mongoose from "mongoose";
const postSchema = new mongoose.Schema ({
    userId: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type:String
    },
    likes: {
        type: Array,
        default:[]
    },
    likecount: {
        type: Number
    }
},
    {
        timestamps:true
    }
);

const Posts= mongoose.model('Posts',postSchema);
export default Posts;