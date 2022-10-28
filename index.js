import express from 'express';
import connection from './database.js';
import todoRouters from './routes/todo-routers.js';

const PORT = 5000;

const app = express();
app.use(express.json());

app.use('/todo',todoRouters);

app.listen(PORT,()=>console.log(`app is running on port:${PORT}`));