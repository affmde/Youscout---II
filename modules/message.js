const mongoose = require('mongoose');

const messageReportSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
    },
    date:{
        type: String,
    },
    message:{
        type: String
    }
})


const MessageModel = mongoose.model("messages", messageReportSchema);
module.exports = MessageModel;