const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const aboutYouModel = require("../model/aboutYouModel");

exports.createAboutYou = catchAsync(async (req, res, next) => {
  const { resumeHeadline, summary } = req.body;

  const aboutYou = await aboutYouModel.findOne({ user: req.user._id });
  if (!aboutYou) {
    const aboutYouInfo = new aboutYouModel({
      resumeHeadline: resumeHeadline,
      summary: summary,
      user: req.user.id,
    });
    try {
      await aboutYouInfo.save();
    } catch (error) {
      return next(new AppError("unable to save aboutYou data in DB", 400));
    }
    return res.status(200).json({
      status: "Success",
    });
  }
  const updatedAboutYou = await aboutYouModel.findOneAndUpdate(
    aboutYou._id,
    { resumeHeadline, summary },
    { new: true }
  );

  if (!updatedAboutYou) {
    return next(new AppError("unable to update about You data", 404));
  }
  return res.status(200).json(updatedAboutYou);
});

exports.getAboutYou = catchAsync(async (req, res, next) => {
  const aboutYou = await aboutYouModel.findOne({ user: req.user._id });

  if (!aboutYou) {
    return next(new AppError("no About you data found", 404));
  }

  return res.status(200).json(aboutYou);
});
