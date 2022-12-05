import mongoose from "mongoose";
const inviteSchema = new mongoose.Schema ({
    events: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    inviteTime: {
        type: Date,
        default: Date.now()
    }
});

const invites= mongoose.model('Invites',inviteSchema)
export default inviteSchema