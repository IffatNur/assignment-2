import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/user/user.route';
export const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Assignment 2 is running');
});

console.log(process.cwd());
