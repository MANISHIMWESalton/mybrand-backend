import express from 'express'
import { checkAdmin, loginAdmin } from '../modules/admin/controller/adminControllers';
import { AdminAuth } from '../middleware/AdminAuth';

const adminRoutes = express.Router();

adminRoutes.post("/check", AdminAuth, checkAdmin)
adminRoutes.post("/login", loginAdmin)

export default adminRoutes;