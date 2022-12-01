const catchAsync = require("../utilities/catchAsync");
const AppError = require("../utilities/appError");
const personalInfoModel = require("../model/personalInfoModel");

exports.createPersonalInfo = catchAsync(async (req, res, next) => {
  const { firstName, lastName, dob, nationality, gender, martialStatus } =
    req.body;

  const personalInfo = await personalInfoModel.findOne({ user: req.user._id });

  if (!personalInfo) {
    console.log(
      "no personal Info found against this User so creating new data"
    );
    const pInfo = new personalInfoModel({
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      nationality: nationality,
      gender: gender,
      martialStatus: martialStatus,
      user: req.user.id,
    });

    try {
      await pInfo.save();
    } catch (error) {
      return next(new AppError("unable to save personal Info data in DB", 400));
    }
    return res.status(200).json({
      status: "Success in saving new data",
    });
  }

  console.log(
    "personal Info found against this User so updating it with new data"
  );

  const updatedPersonalInfo = await personalInfoModel.findOneAndUpdate(
    personalInfo._id,
    { firstName, lastName, dob, nationality, gender, martialStatus },
    { new: true }
  );

  if (!updatedPersonalInfo) {
    return next(new AppError("unable to update personal Info", 404));
  }
  return res.status(200).json(updatedPersonalInfo);
});

exports.getPersonalInfo = catchAsync(async (req, res, next) => {
  const personalInfo = await personalInfoModel.findOne({ user: req.user._id });

  if (!personalInfo) {
    return next(new AppError("no personal Info found", 404));
  }

  return res.status(200).json(personalInfo);
});

