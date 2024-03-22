const mongoose = require("mongoose");

const assetSchema = mongoose.Schema(
  {
    assetCode: {
      type: Number,
      required: [true, "Asset code required..!!"],
    },
    assetGroupCode: {
      type: Number,
      required: [true, "Asset Group code required"],
    },
    department: {
      type: String,
      required: [true, "Department required"],
    },
    area: {
      type: String,
      required: [true, "Area required"],
    },
    location: {
      type: String,
      required: [true, "Location required"],
    },
    model: {
      type: String,
      required: [true, "Model required"],
    },
    make: {
      type: String,
      required: [true, "Make required"],
    },
    supplier: {
      type: String,
      required: [true, "Supplier required"],
    },
    serialNumber: {
      type: String,
      required: [true, "Serial number required"],
    },
    commissioningDate: {
      type: Date,
      required: [true, "Date required"],
    },
    cost: {
      type: Number,
      required: [true, "Cost required"],
    },
    status: {
      type: String,
      enum: ["Instock", "outofStock"],
      default: "outofStock",
    },
    qr: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
