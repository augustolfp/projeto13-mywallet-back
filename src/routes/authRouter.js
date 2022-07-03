import { Router } from 'express';
import bcrypt from 'bcrypt';
import db from '../dbStrategy/mongo.js';

const authRouter = Router();

authRouter.post("/sign-up", async (req, res) => {
    const user = req.body;
    const passwordHash = bcrypt.hashSync(user.password, 10);

    try {
        await db.collection('users').insertOne({
            name: user.name,
            email: user.email,
            password: passwordHash
        });
        res.sendStatus(201);
    }
    catch(error) {
        res.sendStatus(500);
    }

});


export default authRouter;