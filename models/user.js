var mongoose = require("mongoose");
 
var userSchema = new mongoose.Schema({
   name: String,
   password: String,
   money: Number
});
 
module.exports = mongoose.model("User", assetSchema);