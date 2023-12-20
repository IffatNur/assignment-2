"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const fullNameSchema = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String },
});
const addressSchema = new mongoose_1.Schema({
    street: { type: String },
    city: { type: String },
    country: { type: String },
});
const ordersSchema = new mongoose_1.Schema({
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number },
});
const userSchema = new mongoose_1.Schema({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: fullNameSchema,
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    hobbies: [{ type: String }],
    address: addressSchema,
    orders: [ordersSchema]
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
