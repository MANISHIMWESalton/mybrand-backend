import express from 'express'
import userController from '../modules/users/controllers/userController';
import { Auth } from '../middleware/Auth';

const userRoutes = express.Router();

userRoutes.post("/register", userController.registerUser)
userRoutes.get("/users", userController.getAllUsers)
userRoutes.post("/login", userController.loginUser)
userRoutes.patch("/update", userController.updateUser)
userRoutes.delete("/delete",Auth, userController.deleteUser)
export default userRoutes;