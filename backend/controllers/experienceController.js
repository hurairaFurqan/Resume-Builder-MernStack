const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const experienceModel = require("../model/experienceModel");

exports.createExperience = catchAsync(async (req, res, next) => {
  const { experience } = req.body;

  const experienceDetail = await experienceModel.findOne({
    user: req.user._id,
  });

  if (!experienceDetail) {
    const newExperience = new experienceModel({
      experience,
      user: req.user.id,
    });
    try {
      await newExperience.save();
    } catch (error) {
      return next(new AppError("unable to save experience in DB", 400));
    }
    return res.status(200).json({
      status: "Success",
    });
  }
  const updatedExperience = await experienceModel.findOneAndUpdate(
    experienceDetail._id,
    { experience },
    { new: true }
  );
  if (!updatedExperience) {
    return next(new AppError("unable to update experience details", 404));
  }
  return res.status(200).json(updatedExperience);
});

exports.getExperience = catchAsync(async (req, res, next) => {
  const experienceDetail = await experienceModel.findOne({
    user: req.user._id,
  });

  if (!experienceDetail) {
    return next(
      new AppError("no Experience Details found against this ID", 404)
    );
  }

  return res.status(200).json(experienceDetail);
});
