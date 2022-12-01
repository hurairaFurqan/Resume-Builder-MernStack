const mongoose = require("mongoose");
const {Schema} = mongoose;

const aboutYouSchema = mongoose.Schema({
  resumeHeadline: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  summary: {
    type: String,
    trim: true,
    maxlength: [500, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "userdata",
    required: [true, "Personal Info must belong to a User !"],
  },
});

const aboutYou = mongoose.model("aboutYou", aboutYouSchema);
module.exports = aboutYou;