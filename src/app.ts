import dotenv from 'dotenv';
import express, {Application, Request, Response, NextFunction} from 'express'
import cors from 'cors';
import routes from './app/routes';

dotenv.config();
const app: Application = express();


app.use(cors());
app.use(express.json());

// All routes
app.use(routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello From Eventify!');
});


// error-handler for if no route found        
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: "Route not found" })
});

export default app;