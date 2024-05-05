const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    kota: {
      type: String,
      required: true,
    },
    kodePos: {
      type: String,
      required: true,
    },
    jalan: {
      type: String,
      required: true,
    },
    noTelp: {
      type: String,
      required: true,
    },
    rt: {
      type: Number,
      required: true,
    },
    rw: {
      type: Number,
      required: true,
    },
  },
  { collection: "address" }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
