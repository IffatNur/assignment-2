import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

// to create users 
const createUserIntoDB = async(user: TUser) =>{
    const result = await UserModel.create(user);
    return result;
}

// to get all the users 
const getAllUserofDB = async() =>{
    const result = await UserModel.find();
    return result;
}

// to find a user from db 
const findOneUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

// to delete a user 
const deleteOneUserFromDB = async(userId: number) =>{
    const result = await UserModel.deleteOne({userId});
    return result;
}

// to update a user info 
const updateOneUserOfDB =async (userId:number, user: TUser) => {
    const result = await UserModel.updateOne(
        {userId: userId},
        {$set: {user: user}}
    )
    return result
}

// to get orders of a particular user 
const getOrdersFromDB = async(userId:number) =>{
    const result = await UserModel.findOne({userId});
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUserofDB,
    findOneUserFromDB,
    deleteOneUserFromDB,
    updateOneUserOfDB,
    getOrdersFromDB
}