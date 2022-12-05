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
        enum: ["Hiking","Traveling","Blogging","Writing","Reading","Netflix"]
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
        default: 2000
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

userSchema.virtual('Posts' ,
{
    ref:"Posts",
    id:"_id"
})

userSchema.virtual('Events' ,
{
    ref:"Events",
    id:"_id"
})

userSchema.virtual('Invites' ,
{
    ref:"Invites",
    id:"_id"
})

userSchema.virtual('Badge').get( function () 
{

    if ( this.stars>=25000 ) { return 'Silver' }
    else if ( this.stars>=40000 ) { return "Ruby" }
    else if ( this.stars>=50000 ) { return "Golden" }
    else if ( this.stars>=60000 ) { return "Diamond" }
    else if ( this.stars>=65000 ) { return "Sapphire" }
    else if ( this.stars>=70000 ) { return "Platinum" }
    else if ( this.stars>=100000 ) { return "Eternal" }
} )


const users= mongoose.model('Users',userSchema);
export default users;