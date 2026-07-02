import Script from '../models/Script.js';

// Create script
export const createScript = async (req, res) => {
  try {
    const script = await Script.create(req.body);
    res.json(script);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all scripts
export const getScripts = async (req, res) => {
  try {
    const scripts = await Script.find().populate('projectId');
    res.json(scripts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single script
export const getScript = async (req, res) => {
  try {
    const script = await Script.findById(req.params.id).populate('projectId');
    res.json(script);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update script
export const updateScript = async (req, res) => {
  try {
    const script = await Script.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(script);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete script
export const deleteScript = async (req, res) => {
  try {
    await Script.findByIdAndDelete(req.params.id);
    res.json({ message: "Script deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
