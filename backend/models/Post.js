import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  scriptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Script' },
  platform: { type: String, required: true },   // facebook, instagram, tiktok, linkedin, etc.
  content: { type: String, required: true },
  status: { type: String, default: 'draft' },   // draft, scheduled, published
  scheduledAt: { type: Date },
  publishedAt: { type: Date },
  link: { type: String }
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
