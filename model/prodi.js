const mongoose = require("mongoose");

const prodiSchema = new mongoose.Schema(
  {
    namaProdi: {
      type: String,
      required: true,
    },
    fakultas: {
      type: String,
      required: true,
    },
    akreditasi: {
      type: String,
    },
  },
  { collection: "program_studi" }
);

const Prodi = mongoose.model("Prodi", prodiSchema);

module.exports = Prodi;
