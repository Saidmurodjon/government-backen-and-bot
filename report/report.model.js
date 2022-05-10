const mongoose = require('mongoose')


// product uchun

const reportSchema = mongoose.Schema({
  userName: String,
  userFish: String,
  userlar: String,
  services: [Object],
  cilientFish: String,
  cilientBolim: String,
  cilientKabinet: String,
  tasdiq: Boolean,
  chatID:String,    
  fullFData: Date,
  chatID:String
});

const ReportModel = mongoose.model('ReportModel' , reportSchema)



module.exports = ReportModel