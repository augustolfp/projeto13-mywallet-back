import { Router } from "express";
import { getTransactions } from "../controllers/operationController.js";

const operationRouter = Router();

operationRouter.get("/get-balance", getTransactions);

export default operationRouter;