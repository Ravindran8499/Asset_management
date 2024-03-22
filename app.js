const express = require("express");
const PORT = 3000;

const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
const { getAssets } = require("./Controllers/getAssetController");
const { postAssets } = require("./Controllers/postAssetController");
const { deleteAsset } = require("./Controllers/deleteAssetController");
const { updateAsset } = require("./Controllers/updateAssetController");

const conn =
  "mongodb+srv://Ravindran:ravi2001@cluster0.50gwanj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.use(express.json());
app.get("/asset", getAssets);

app.post("/asset", postAssets);

app.delete("/asset", deleteAsset);

app.patch("/asset/:id", updateAsset);

mongoose.connect(conn).then(() => {
  app.listen(PORT, () => {
    console.log("Server Started at Port 3000 ✅");
  });
});
