
var mongoose = require("mongoose")

var BirthdayCommentSchema = new mongoose.Schema({
  name: String,
  idea: String,
  comment: String
});

// var BirthdayPostSchema = new mongoose.Schema({
//   name: String,
//   idea: String,
//   ages: String,
//   gender: Array,
//   image: String,
//   description: String,
//   comments: [BirthdayCommentSchema]
// }
// )

// mongoose.model("BirthdayPost", BirthdayPostSchema)
mongoose.model("BirthdayComment", BirthdayCommentSchema)
mongoose.connect("mongodb://localhost/birthday");

module.exports = mongoose;
