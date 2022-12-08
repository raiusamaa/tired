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

const Community= mongoose.model('Community',community);
export default Community;
