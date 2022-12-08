import mongoose from "mongoose";
const postSchema = new mongoose.Schema ({
    name: {
        type: String
    },
    description: {
        type: String
    },
    // author: {
    //     type: String
    // },
    img: {
        type:String
    },
    date: {
        type: Date,
        default: Date.now()
    }
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "user"
    // }
}
);

const Posts= mongoose.model('Posts',postSchema);
export default Posts;