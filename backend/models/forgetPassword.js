const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const forgetPasswordSchema = mongoose.Schema({
    user: {
        type: String,
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

forgetPasswordSchema.pre('save', async function (next) {
    if (this.isModified("token")) {
        this.token = await bcrypt.hash(this.token, 10);
    }
    next();
});


forgetPasswordSchema.methods.compareToken = async(token) => {
    const result = await bcrypt.compare(token, this.token);
    return result;
}


const ForgetPassword = mongoose.model('forgetPassword', forgetPasswordSchema);
module.exports = ForgetPassword;