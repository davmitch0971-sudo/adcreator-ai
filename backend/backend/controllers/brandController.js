const Brand = require('../models/Brand');

// Create brand
exports.createBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.json(brand);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all brands
exports.getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single brand
exports.getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    res.json(brand);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update brand
exports.updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(brand);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete brand
exports.deleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);
    res.json({ message: "Brand deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
