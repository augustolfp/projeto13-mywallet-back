import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import signUpCheck from '../middlewares/signUpCheckMiddleware.js';
import signInCheck from '../middlewares/signInCheckMiddleware.js';

const authRouter = Router();

authRouter.post("/sign-up", signUpCheck, signUp);
authRouter.post("/sign-in", signInCheck, signIn);

export default authRouter;