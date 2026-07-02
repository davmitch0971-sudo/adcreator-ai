const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  tone: String,
  colors: [String],
  audience: String,
  mission: String,
  vision: String,
}, { timestamps: true });

module.exports = mongoose.model('Brand', BrandSchema);
