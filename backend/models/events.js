import mongoose from "mongoose";

const eventSchema = new mongoose.Schema ({
    name: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type:String
    },
    date: {
        type: Date
    },
    hobby: {
        type:String
    },
    interested:{
        type: Array,
        default: []
    },
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