const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    homeTeam:{
        type: String,
        required:true
    },
    awayTeam:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String
    },
    player:{
        type: String
    },
    location: {
        type: String,
        required:true
    }
})

const ScheduleModel = mongoose.model("schedule", scheduleSchema);
module.exports = ScheduleModel;