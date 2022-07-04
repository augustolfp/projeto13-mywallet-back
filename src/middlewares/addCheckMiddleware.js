import { addSchema } from "../schemas/operationSchema.js";

export default async function validateBody(req, res, next) {
    const userInput = req.body;
    const validation = addSchema.validate(userInput);

    if(validation.error) {
        console.log(validation.error.details);
        res.status(422).send("Valor precisa ser positivo!");
        return;
    }

    next();
}