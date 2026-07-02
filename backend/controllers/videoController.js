import Video from '../models/Video.js';

// Create video
export const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate('projectId')
      .populate('scriptId');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single video
export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate('projectId')
      .populate('scriptId');
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update video
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete video
export const deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: "Video deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
