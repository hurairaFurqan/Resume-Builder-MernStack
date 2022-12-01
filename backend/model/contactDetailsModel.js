const mongoose = require("mongoose");
const {Schema} = mongoose;

const contactDetailSchema = mongoose.Schema({
  mobileNumber: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  address: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  email: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  additionalUrl: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  linkedinUrl: {
    type: String,
    trim: true,
    maxlength: [50, "Max length exceeded"],
    minlength: [1, "min length exceeded"],
  },
  githubUrl: {
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

const contactDetails = mongoose.model("contactDetail", contactDetailSchema);
module.exports = contactDetails;
