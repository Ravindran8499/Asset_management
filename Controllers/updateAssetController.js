const Asset = require("../Models/Asset");
const { generateQrCode } = require("./postAssetController");

module.exports.updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const asset = await Asset.findById(id);

    if (!asset) {
      return res.status(404).json({ message: "Asset not found!!" });
    }

    const qrData = {
      assetCode: req.body.assetCode || asset.assetCode,
      department: req.body.department || asset.department,
      location: req.body.location || asset.location,
    };
    const qr = await generateQrCode(qrData);
    const updateData = { ...req.body, qr: qr };
    const updatedAsset = await Asset.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.json(updatedAsset);
  } catch (err) {
    return res.status(500).json({
      status: "Failure",
      error: err,
    });
  }
};
