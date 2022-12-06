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
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
},
    {
        timestamps:true
    }
);

const Posts= mongoose.model('Posts',postSchema);
export default Posts;