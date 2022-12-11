const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const cloudinary = require("cloudinary").v2;

const { errorHandler } = require("./middlewares/error");
const cors = require("cors");

require("dotenv").config();
require("./db");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const adminRouter = require("./routes/admin");
const { handleNotFound } = require("./utils/helper");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);
app.use("/api/review", reviewRouter);
app.use("/api/admin", adminRouter);
app.use("/*", handleNotFound);

app.use(errorHandler); 

app.listen(PORT, () => {
  console.log("Server is Running");
});
