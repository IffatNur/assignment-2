import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async(user: TUser) =>{
    const result = await UserModel.create(user);
    return result;
}

const getAllUserofDB = async() =>{
    const result = await UserModel.find();
    return result;
}

const findOneUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

const deleteOneUserFromDB = async(userId: number) =>{
    const result = await UserModel.deleteOne({userId});
    return result;
}

export const UserServices = {
    createUserIntoDB,
    getAllUserofDB,
    findOneUserFromDB,
    deleteOneUserFromDB
}