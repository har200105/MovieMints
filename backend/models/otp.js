const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const otpSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required:true
    },
    token: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        expires: 3600,
        default:Date.now()
    }
}, {
    timestamps:true
});


otpSchema.pre('save', async(next) => {
    if (this.isModified('token')) {
        this.token = await bcrypt.hash(this.token, 10);
    }
    next();
});

otpSchema.methods.compareToken = async(token) => {
    const result = await bcrypt.compare(token, this.token);
    return result;
}


const OTP = mongoose.model("otp", otpSchema);
module.exports = OTP;

