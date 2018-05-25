const mongoose = require('mongoose');

const MODEL_NAME = 'Product';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    min: 0
  },
  brand: {
    name: {
      type: String,
      trim: true,
    },
    code: {
      type: String,
      trim: true,
      lowercase: true
    }
  },
  images: [String],
  sizes: [{
    type: Number,
    min: 34,
    max: 50
  }]
}, {
    timestamps: true,
  })

ProductSchema.statics.getAll = async function () {
  return await this.find({});
}

ProductSchema.statics.getDetail = async function (id) {
  return await this.findById(id).select('-createdAt -updatedAt -__v');
}

ProductSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  }

});



module.exports = mongoose.model(MODEL_NAME, ProductSchema);