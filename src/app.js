import express, {json} from 'express';
import cors from 'cors';
import router from './routes/index.js';
import { kickInactiveUsers } from './controllers/sessionController.js';


const server = express();
server.use(cors());
server.use(json());

server.use(router);

setInterval(kickInactiveUsers, 15*1000);

server.listen(5000);