const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const interestModel = require("../model/interestModel");

exports.createInterest = catchAsync(async (req, res, next) => {
  const { description } = req.body;

  const interest = await interestModel.findOne({ user: req.user._id });
  if (!interest) {
    const newInterest = new interestModel({
      description: description,
      user: req.user.id,
    });

    try {
      await newInterest.save();
    } catch (error) {
      return next(new AppError("unable to save interest data in DB", 400));
    }
    return res.status(200).json({
      status: "Success",
    });
  }
  const updatedInterest = await interestModel.findOneAndUpdate(
    interest._id,
    { description },
    { new: true }
  );

  if (!updatedInterest) {
    return next(new AppError("unable to update personal Info", 404));
  }
  return res.status(200).json(updatedInterest);
});

exports.getInterest = catchAsync(async (req, res, next) => {
  const interestInfo = await interestModel.findOne({ user: req.user._id });

  if (!interestInfo) {
    return next(new AppError("no Interest Data found", 404));
  }

  return res.status(200).json(interestInfo);
});
