const Asset = require("../Models/Asset");

module.exports.deleteAsset = async (req, res, next) => {
  try {
    const asset = await Asset.findByIdAndDelete(req.body.id);
    return res.status(200).json({
      status: "success",
      data: {
        message: "Asset has been deleted",
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failure",
      error: err,
    });
  }
};
