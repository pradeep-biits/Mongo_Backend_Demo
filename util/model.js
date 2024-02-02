const { Schema, default: mongoose } = require("mongoose");

const product = new mongoose.Schema({
  name: String,
  price: String,
  color: String,
  model: String,
});

module.exports  =
  mongoose.models.products || mongoose.model("products", product);
