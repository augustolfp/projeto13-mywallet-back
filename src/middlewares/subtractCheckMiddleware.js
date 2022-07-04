import { subtractSchema } from "../schemas/operationSchema.js";

export default async function validateBody(req, res, next) {
    const userInput = req.body;
    const validation = subtractSchema.validate(userInput);

    if(validation.error) {
        console.log(validation.error.details);
        res.status(422).send("Valor precisa ser negativo!");
        return;
    }

    next();
}