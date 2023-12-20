import { Schema, model } from "mongoose";
import { TAddress, TFullname, TOrder, TUser } from "./user.interface";

const fullNameSchema = new Schema<TFullname>({
    firstName: {type: String},
    lastName: {type: String},
})

const addressSchema = new Schema<TAddress>({
    street: {type: String},
    city: {type: String},
    country: {type: String},
})

const ordersSchema = new Schema<TOrder>({
    productName: {type: String},
    price: {type: Number},
    quantity: {type: Number},
})

const userSchema = new Schema<TUser>({
  userId: {type: Number, required: true, unique:true},
  username: {type: String, required: true, unique:true},
  password: {type: String, required: true},
  fullName: fullNameSchema,
  age: {type: Number},
  email: {type: String, required: true, unique:true},
  isActive: {type: Boolean, default: true},
  hobbies: [{type: String}],
  address: addressSchema,
  orders: [ordersSchema]
})

export const UserModel = model<TUser>('User', userSchema);