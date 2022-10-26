import express from 'express';
import connection from './database.js';

const PORT = 5000;

const app = express();
app.use(express.json());

app.listen(PORT,()=>console.log(`app is running on port:${PORT}`));