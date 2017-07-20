
var mongoose  = require("./connection");
// var birthdayComment  = require("./seeds");

var BirthdayComment = mongoose.model("BirthdayComment");

[
  {
    name: "Tiffany",
    idea: "Backwards Party",
    "comment": "I really love this idea! It's so original"
  },
  {
    name: "Jason",
    idea: "Backwards Party",
    comment: "We did this for our son and everyone had a blast"
  }
]


BirthdayComment.remove({}).then(function(){
  BirthdayComment.collection.insert(seedData).then(function(){
    process.exit();
  });
});

// module.exports = mongoose
