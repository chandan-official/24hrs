import { Router } from 'express';
import {login, signup} from './authcontroller.js';
import middleware from './middleware.js';
import User, {user} from './models/User.js'

const { validateSignup, validateLogin } = middleware;


const router = Router();

// Route for user signup
router.post('/signup', validateSignup, signup);

// Route for user login
router.post('/login', validateLogin, login);

// router.post('/user',User);

export default router;
