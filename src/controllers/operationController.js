import db from "../dbStrategy/mongo.js";


export async function getTransactions(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if(!token) {
        return res.sendStatus(401);
    }

    const session = await db.collection("sessions").findOne({ token });
            
    if (!session) {
        return res.sendStatus(401);
    }

    const user = await db.collection('users').findOne({
        email: session.email
    });

    if(user) {
        delete user.password;
        res.send(user);
    }
    else {
        res.sendStatus(401);
    }

}