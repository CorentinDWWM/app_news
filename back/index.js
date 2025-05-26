const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const postRoutes = require("./routes/post");
const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
const __DIRNAME = path.resolve();

app.use(express.static(path.join(__DIRNAME, "/front/dist")));

app.use("/post", postRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__DIRNAME, "front", "dist", "index.html"));
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server on ${process.env.PORT}`)
  );
});
