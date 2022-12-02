const mongoose = require("mongoose");

const { Schema } = mongoose;

const experienceScehma = mongoose.Schema({
  experience: [
    {
      jobTitle: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      companyName: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      workLocation: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      startMonth: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      startYear: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      endMonth: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      endYear: {
        type: String,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      isPresent: {
        type: Boolean,
        trim: true,
        maxlength: [50, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      },
      description: {
        type: String,
        trim: true,
        maxlength: [500, "Max length exceeded"],
        minlength: [1, "min length exceeded"],
      }
    },
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: "userdata",
    required: [true, "experience must belong to a User !"],
  },
});

const experienceInfo = mongoose.model("experienceInfo", experienceScehma);
module.exports = experienceInfo;
