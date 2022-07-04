import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../dbStrategy/mongo.js';


export async function signUp(req, res) {
    const userInput = req.body;
    const passwordHash = bcrypt.hashSync(userInput.password, 10);

    try {
        await db.collection('users').insertOne({
            name: userInput.name,
            email: userInput.email,
            password: passwordHash,
            balance: 0,
            transactions: []
        });
        res.sendStatus(201);
    }
    catch(error) {
        res.sendStatus(500);
    }
};

export async function signIn(req, res) {
    const userInput = req.body;

    const foundUser = await db.collection('users').findOne({
        email: userInput.email
    });

    if(foundUser && bcrypt.compareSync(userInput.password, foundUser.password)) {
        const token = uuid();

        await db.collection('sessions').insertOne({
            email: foundUser.email,
            token: token,
            lastUpdate: Date.now()
        });

        res.status(200).send(token);
    }

    else {
        res.sendStatus(401);
    }
}