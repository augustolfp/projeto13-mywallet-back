import express, {json} from 'express';
import cors from 'cors';
import db from './dbStrategy/mongo.js';
import bcrypt from 'bcrypt';


const server = express();
server.use(cors());
server.use(json());

server.listen(5000);