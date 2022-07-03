import { signUpSchema } from "../schemas/authSchemas.js";

export default async function validateBody(req, res, next) {
    const user = req.body;
    const validation = signUpSchema.validate(user);

    if(validation.error) {
        console.log(validation.error.details);
        res.sendStatus(422);
        return;
    }

    next();
}