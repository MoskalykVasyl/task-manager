import express from "express";
import bodyParser from "body-parser";
import './config/db.js';

// Routes
import authRouter from './routers/authRoutes.js';
import taskRouter from './routers/taskRoutes.js';


const app = express();
const port = 3000;

// middleware

app.use(bodyParser.json());

app.use('/api', authRouter)
app.use('/api', taskRouter)


app.listen(port, () => {
    console.log(`Server starting at the http://localhost:${port}`);
});
