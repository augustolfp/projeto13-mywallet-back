import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import signUpCheck from '../middlewares/signUpCheckMiddleware.js';

const authRouter = Router();

authRouter.post("/sign-up", signUpCheck, signUp);
authRouter.post("/sign-in", signIn);

export default authRouter;