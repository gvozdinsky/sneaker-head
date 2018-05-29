const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'Username is required'],
    unique: true,
    index: true,
    trim: true,
    match: [/^[a-zA-Z0-9]+$/, "Email is invalid"]
  },
  password: String,
  cart: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: {
      type: Number,
      min: 1,
      max: 10
    },
    size: {
      type: Number,
      min: 34,
      max: 50
    }
  }]
}, {
    timestamps: true,
    minimize: false
  })

UserSchema.plugin(passportLocalMongoose);

//return safe user data, without hast, salt, etc
UserSchema.methods.toAuthJSON = async function () {
  const res = await this.model('User')
    .findById(this.id)
    .populate('cart.product', 'name images price')
  return {
    user: {
      username: this.username,
    },
    cart: res.cart
  }

}

UserSchema.methods.addToCart = async function (cartItem) {
  cartItem.product = mongoose.Types.ObjectId(cartItem.product);
  try {
    this.cart.push(cartItem);
    const result = await this.save();
    const new_item = await this.model('User').findById(this.id)
      .populate('cart.product', 'name images price')
      .select({ "cart": { "$slice": -1 } });
    return new_item.cart;
  } catch (e) {
    console.log('err\n\n\n\n', e)
  }

}


module.exports = mongoose.model('User', UserSchema);