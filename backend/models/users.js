import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
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
    profession: {
        type: String
    },
    city: {
        type: String
    },
    hobbies: {
        type: String,
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
    followerCount: {
        type: Number
    },
    followingCount: {
        type: Number
    },
    stars: {
        type: Number,
        default: 10000
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps:true
    }
);

// userSchema.virtual('Posts' ,
// {
//     ref:"Posts",
//     id:"_id"
// })

// userSchema.virtual('Events' ,
// {
//     ref:"Events",
//     id:"_id"
// })

// userSchema.virtual('Invites' ,
// {
//     ref:"Invites",
//     id:"_id"
// })

const users= mongoose.model('Users',userSchema);
export default users;