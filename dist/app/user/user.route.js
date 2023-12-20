"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/users', user_controller_1.UserController.createNewUser);
router.get('/users', user_controller_1.UserController.getAllUser);
router.get('/users/:userId', user_controller_1.UserController.getOneUser);
router.delete('/users/:userId', user_controller_1.UserController.deleteOneUser);
router.put('/users/:userId', user_controller_1.UserController.updateOneUser);
router.get('/users/:userId/orders', user_controller_1.UserController.getOrders);
exports.UserRoutes = router;
