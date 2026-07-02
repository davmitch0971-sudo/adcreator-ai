import mongoose from 'mongoose';

const ScriptSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  prompt: { type: String, required: true },
  generatedText: { type: String },
  tone: { type: String },
  length: { type: String }, // short, medium, long
}, { timestamps: true });

export default mongoose.model('Script', ScriptSchema);
