const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  name: { type: String, required: true },
  description: String,
  goal: String,
  type: String,
  audience: String,
  status: { type: String, default: "planning" }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
