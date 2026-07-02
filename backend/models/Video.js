import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  scriptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Script' },
  format: { type: String },        // e.g. "vertical", "horizontal", "square"
  duration: { type: String },      // e.g. "15s", "30s", "60s"
  resolution: { type: String },    // e.g. "1080x1920"
  status: { type: String, default: "planning" }, // planning, rendering, completed
  notes: { type: String },
}, { timestamps: true });

export default mongoose.model('Video', VideoSchema);
