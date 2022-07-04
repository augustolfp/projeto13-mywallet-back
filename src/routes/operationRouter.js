import { Router } from "express";
import { getTransactions, addOperation } from "../controllers/operationController.js";

const operationRouter = Router();

operationRouter.get("/get-balance", getTransactions);
operationRouter.put("/add-operation", addOperation);

export default operationRouter;