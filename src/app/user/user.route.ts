import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/users', UserController.createNewUser)

router.get('/users', UserController.getAllUser)

router.get('/users/:userId', UserController.getOneUser)

export const UserRoutes = router;