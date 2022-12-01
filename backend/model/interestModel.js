const mongoose = require("mongoose");
const {Schema} = mongoose;


const interestSchema = mongoose.Schema({
  description: {
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

const interest = mongoose.model("interest", interestSchema);
module.exports = interest;
