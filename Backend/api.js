const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/LilDappers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img1: String,
  img2: String,
  category: String,
  shippingTime: String,
  color: String,
  type: String,
  fabric: String,
  section: String,
  code: String,
  id: Number,
  timeProductAdded: Date,
  sizes: [
    {
      type: String,
      quantity: Number,
    },
  ],
});

const Product = mongoose.model('items', ProductSchema);

app.get('/api/items', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
