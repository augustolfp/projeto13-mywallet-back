import { signInSchema } from "../schemas/authSchemas.js";

export default async function validateBody(req, res, next) {
    const userInput = req.body;
    const validation = signInSchema.validate(userInput);

    if(validation.error) {
        console.log(validation.error.details);
        res.sendStatus(422);
        return;
    }

    next();
}