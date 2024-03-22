const Asset = require("../Models/Asset");
const qr = require("qrcode");

module.exports.generateQrCode = async (qrObject) => {
  const qrCodeDataURL = await qr.toDataURL(JSON.stringify(qrObject));

  const qrCodeBase64 = qrCodeDataURL.split(",")[1];
  return qrCodeBase64;
};
module.exports.postAssets = async (req, res, next) => {
  try {
    const qrObject = {
      assetCode: req.body.assetCode,
      department: req.body.department,
      location: req.body.location,
    };

    const qrUrl = await generateQrCode(qrObject);
    const reqObject = {
      ...req.body,
      qr: qrUrl,
    };

    const asset = await Asset.create(reqObject);
    return res.status(201).json({
      status: "success",
      data: {
        asset: asset,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failure",
      error: err,
    });
  }
};
