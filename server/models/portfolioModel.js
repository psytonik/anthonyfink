const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxlength) => ({ type:String, required:true, maxlength})
const portfolioSchema = new Schema({
    userId: {type:String},
    title:setStringType(256),
    position:setStringType(256),
    company:setStringType(256),
    description:setStringType(2048),
    location:setStringType(128),
    startDate:{type:Date,required:true},
    endDate:Date
});
module.exports = mongoose.model('Portfolio',portfolioSchema)
