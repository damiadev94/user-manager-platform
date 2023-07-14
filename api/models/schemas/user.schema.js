//modelo de usuario para db
const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const userSchema = new Schema({
	id : Number,
    email : String,
    password : String
})

export const userModel = new Model("User", userSchema);
