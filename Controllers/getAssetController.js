const Asset = require("../Models/Asset");

module.exports.getAssets = async (req, res, next) => {
  try {
    const assets = await Asset.find({}).sort({ createdAt: "desc" }).exec();
    assets.forEach((asset) => {
      console.log(atob(asset.qr));
    });
    return res.status(200).json({
      status: "success",
      data: {
        assets: assets,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failure",
      error: err,
    });
  }
};
