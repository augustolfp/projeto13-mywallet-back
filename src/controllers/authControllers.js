import bcrypt from 'bcrypt';
import db from '../dbStrategy/mongo.js';

export async function signUp(req, res) {
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
};