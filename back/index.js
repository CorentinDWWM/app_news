const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "https://tp-appnews.onrender.com", credentials: true }));

app.use(express.json());

const postRoutes = require("./routes/post");

app.use("/post", postRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server on ${process.env.PORT}`)
  );
});
