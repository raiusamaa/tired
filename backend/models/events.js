import mongoose from "mongoose";
const eventSchema = new mongoose.Schema ({
    userId: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type:String
    },
    date: {
        type: String
    },
    interested: {
        type: Number
    },
    going : {
        type: Number
    }
    
},
    {
        timestamps:true
    }
);

const Posts= mongoose.model('Posts',postSchema);
export default Posts;