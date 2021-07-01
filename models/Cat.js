const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: { type: String, require: true },
  imageURL: String,
  description: { type: String, require: true },
  adopted: Boolean,
  age: Number,
  breed: {
    type: String,
    enum: ["Tiger", "Leopard", "Cheetah", "Lion", "Panther", "Other"],
  },
  gender: { type: String, enum: ["Male", "Female", "Unknown"] },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cat", catSchema);
