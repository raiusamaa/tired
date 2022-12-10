import mongoose from "mongoose";
const eventSchema = new mongoose.Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type:String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    hobbies: {
        type:String
    },
    location: {
        type: String
    },
    interested:{
        type: Array,
        default: []
    },
    starts: {
        type: Number
    },
    username: {
        type: String
    }
    // communityRef:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'community'
    // },
    // userRef:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'user'
    // }
},
    {
        timestamps:true
    }
);

const Event= mongoose.model('Events',eventSchema);
export default Event;