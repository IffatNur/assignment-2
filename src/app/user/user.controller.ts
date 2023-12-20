import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./user.validation";

const createNewUser = async(req: Request, res: Response) =>{
    try {
        

        const user = req.body.user;
        const userZodValidation = userValidationSchema.parse(user);
        const result = await UserServices.createUserIntoDB(userZodValidation);

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
        if(result === null){
            res.status(404).json({
              success: false,
              message: 'User not found',
              error: {
                code: 404,
                description: 'User not found!',
              },
            });
        }
        else{
            res.status(200).json({
              success: true,
              message: 'User fetched successfully!',
              data: result,
            });
        }
    } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Something went wrong',
          data: error,
        });
    }
}

const deleteOneUser = async(req: Request, res:Response) =>{
    try {
        const { userId } = req.params;
        const id = parseInt(userId);
        const result = await UserServices.deleteOneUserFromDB(id);

        if (!result.deletedCount) {
          res.status(404).json({
            success: false,
            message: 'User not found',
            error: {
              code: 404,
              description: 'User not found!',
            },
          });
        } else {
          res.status(200).json({
            success: true,
            message: 'User deleted successfully!',
            data: result,
          });
        }
    } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Something went wrong',
          data: error,
        });
    }
}

const updateOneUser = async(req: Request, res:Response) =>{
    try {
        const { userId } = req.params;
        const id = parseInt(userId);
        const updatedUser = req.body;
        const result = await UserServices.updateOneUserOfDB(id, updatedUser);
        console.log(result);
          res.status(200).json({
            success: true,
            message: 'User updated successfully!',
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

const getOrders = async(req: Request, res:Response) =>{
    try {
        const { userId } = req.params;
        const id = parseInt(userId);
        const result = await UserServices.getOrdersFromDB(id);
        if(result === null){
            res.status(404).json({
              success: false,
              message: 'User not found',
              error: {
                code: 404,
                description: 'User not found!',
              },
            });
            
        }
        else{
            res.status(200).json({
              success: true,
              message: 'Orders retrieved successfully!',
              data: result?.orders,
            });
        }
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
    getOneUser,
    deleteOneUser,
    updateOneUser,
    getOrders
}