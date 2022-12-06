import mongoose from "mongoose";
const community = new mongoose.Schema ({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email : {
        type: String,
        unique: [ true, "Already Exists" ]
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    logoPic: {
        type: String,
        default: ""
    }
});

community.virtual('events',
{
    name:"Event",
    id:"_id"
});

const Community= mongoose.model('Community',community);
export default Community;
