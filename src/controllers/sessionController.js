import db from '../dbStrategy/mongo.js';

export async function kickInactiveUsers() {
    const fiftySecondsAgo = Date.now() - 50*1000;
    await db.collection('sessions').deleteMany({lastUpdate: {$lt: fiftySecondsAgo}});
}
