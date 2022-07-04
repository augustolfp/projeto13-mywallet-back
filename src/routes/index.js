import { Router } from "express";
import authRouter from "./authRouter.js";
import operationRouter from "./operationRouter.js";

const router = Router();
router.use(authRouter);
router.use(operationRouter);

export default router;