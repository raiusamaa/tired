import mongoose from "mongoose";
const postSchema = new mongoose.Schema ({
    username: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default:""
    },
    img: {
        type:String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "user"
    // }
   
},
{
    timestamps: true
}
);

const Posts= mongoose.model('Posts',postSchema);
export default Posts;