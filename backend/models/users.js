import mongoose from "mongoose";
const userSchema = new mongoose.Schema ({
    username: {
        type: String
    },
    email : {
        type: String
    },
    password: {
        type: String
    },
    profession: {
        type: String
    },
    city: {
        type: String
    },
    hobbies: {
        type: String
    },
    relationship: {
        type: String
    },
    profilePic: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps:true
    }
);

const users= mongoose.model('Users',userSchema);
export default users;