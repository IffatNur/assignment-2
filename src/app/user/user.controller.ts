import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createNewUser = async(req: Request, res: Response) =>{
    try {
        const user = req.body.user;
        const result = await UserServices.createUserIntoDB(user);

        // res message
        res.status(200).json({
          success: true,
          message: 'User created successfully!',
          data: result,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Something went wrong',
          data: error,
        });
    }
}

const getAllUser = async(req:Request, res: Response)=>{
    try {
        const result = await UserServices.getAllUserofDB();

        res.status(200).json({
          success: true,
          message: 'Users fetched successfully!',
          data: result,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Something went wrong',
          data: error,
        });
    }
}

const getOneUser = async(req:Request, res:Response) =>{
    try {
        const { userId } = req.params;
        const id = parseInt(userId)
        const result = await UserServices.findOneUserFromDB(id);

        res.status(200).json({
          success: true,
          message: 'User fetched successfully!',
          data: result,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Something went wrong',
          data: error,
        });
    }
}

export const UserController = {
    createNewUser,
    getAllUser,
    getOneUser
}