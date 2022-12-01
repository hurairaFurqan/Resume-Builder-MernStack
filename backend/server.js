require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const dbConnect = require("./utilities/dbConnect");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const formData = require('./routes/formData');
dbConnect();

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use('/formData', formData);


app.use("*", (req, res) => {
  console.log("in * condition of app.use");
  res.status(500).json(`Internal Server Error at ${req.originalUrl}`);
});

app.listen(process.env.PORT, () => {
  console.log(`server is listening at port ${process.env.PORT}`);
});
