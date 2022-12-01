const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const contactDetailModel = require("../model/contactDetailsModel");

exports.createContactDetails = catchAsync(async (req, res, next) => {
  const {
    mobileNumber,
    address,
    email,
    additionalUrl,
    linkedinUrl,
    githubUrl,
  } = req.body;

  const contactDetail = await contactDetailModel.findOne({
    user: req.user._id,
  });
  if (!contactDetail) {
    const newContactDetail = new contactDetailModel({
      mobileNumber: mobileNumber,
      address: address,
      email: email,
      additionalUrl: additionalUrl,
      linkedinUrl: linkedinUrl,
      githubUrl: githubUrl,
      user: req.user.id,
    });

    try {
      await newContactDetail.save();
    } catch (error) {
      return next(new AppError("unable to save contact details in DB", 400));
    }
    return res.status(200).json({
      status: "Success",
    });
  }

  const updatedContactDetails = await contactDetailModel.findOneAndUpdate(
    contactDetail._id,
    { mobileNumber, address, email, additionalUrl, linkedinUrl, githubUrl },
    { new: true }
  );
  if (!updatedContactDetails) {
    return next(new AppError("unable to update Contact Details", 404));
  }
  return res.status(200).json(updatedContactDetails);
});

exports.getContactDetails = catchAsync(async (req, res, next) => {
  const contactDetail = await contactDetailModel.findOne({ user: req.user._id });

  if (!contactDetail) {
    return next(new AppError("no Contact Details found", 404));
  }

  return res.status(200).json(contactDetail);
});
