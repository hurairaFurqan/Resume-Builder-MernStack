const mongoose = require("mongoose");

const { Schema } = mongoose;

const personalInfoScehma = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  dob: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  gender: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  martialStatus: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  nationality: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "userdata",
    required: [true, "Personal Info must belong to a User !"],
  },
});

const personalInfo = mongoose.model("personalInfo", personalInfoScehma);
module.exports = personalInfo;
