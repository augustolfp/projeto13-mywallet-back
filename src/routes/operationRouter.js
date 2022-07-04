import { Router } from "express";
import { getTransactions, addOperation } from "../controllers/operationController.js";
import addCheck from '../middlewares/addCheckMiddleware.js';
import subtractCheck from '../middlewares/subtractCheckMiddleware.js';

const operationRouter = Router();

operationRouter.get("/get-balance", getTransactions);
operationRouter.put("/add-operation", addCheck, addOperation);
operationRouter.put("/subtract-operation", subtractCheck, addOperation);

export default operationRouter;