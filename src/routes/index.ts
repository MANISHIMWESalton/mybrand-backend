import express from 'express';
import userRoutes from "./users";
import suggestionRoutes from './suggestionRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/suggestion', suggestionRoutes)

export default router;