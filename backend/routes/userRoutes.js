import express from 'express'
import { CreateUser, DeleteUser, getUser, getUserById, UpdateUser } from '../controller/userController.js';

const router = express.Router();

router.get('/users', getUser)
router.get('/users/:id', getUserById)
router.post('/users', CreateUser)
router.delete('/users/:id', DeleteUser)
router.patch('/users/:id', UpdateUser)


export default router