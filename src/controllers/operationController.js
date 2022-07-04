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

export async function addOperation(req, res) {
    const { authorization } = req.headers;
    const operation = req.body;
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

    if(user.transactions) {
        user.transactions.push(operation);
        let calculatedBalance = 0;
        user.transactions.map(transaction => {
            calculatedBalance = calculatedBalance + parseFloat(transaction.value);
        });
        try {
            await db.collection('users').updateOne({
                _id: user._id
            }, {$set: {transactions: user.transactions, balance: calculatedBalance}})
            res.sendStatus(200)
            return;
        }
        catch(error) {
            res.sendStatus(400)
        }
    }
    else {
        res.sendStatus(401);
    }
}