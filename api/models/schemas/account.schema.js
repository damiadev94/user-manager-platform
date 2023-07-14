const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const accountSchema = new Schema({
  id: Number,
  email: String,
  password: String,
  accountInfo: {
    name: String,
    createdAt: Date,
  },
});

export const accountModel = new Model("Account", accountSchema);