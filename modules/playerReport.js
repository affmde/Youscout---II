const mongoose = require('mongoose');

const playerReportSchema = new mongoose.Schema({
    pictureUrl: {
        type: String
    },
    club:{
        type: String
    },
    fullName:{
        type:String
    },
    birthday:{
        type: Date
    },
    gender:{
        type: String
    },
    email: {
        type: String
    },
    phone:{
        type:Number
    },
    nationality:{
        type: String
    },
    matchDate:{
        type: Date
    },
    opponent:{
        type: String
    },
    competition:{
        type:String
    },
    height:{
        type: Number,
    },
    weight:{
        type: Number,
    },
    favoriteFoot:{
        type: String
    },
    position:{
        type: String
    },
    offensiveProcess:{
        type: String
    },
    defensiveProcess:{
        type: String
    },
    offensiveTransition:{
        type: String
    },
    defensiveTransition:{
        type: String
    },
    psychological:{
        type:String
    },
    physical:{
        type: String
    },
    strenghtsAndWeaknesses:{
        type: String
    },
    recommendationLevel:{
        type: Number
    }

});

const PlayerReportModel = mongoose.model("playerReports", playerReportSchema);
module.exports = PlayerReportModel;