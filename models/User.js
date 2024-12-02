const mongoose =   require('mongoose');

const userSchema =new mongoose.Schema({
    src: {
        type: String,
        required: true,
        uppercase: true,
    },
    tgt: {
        type: String,
        required: true,
        uppercase: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);