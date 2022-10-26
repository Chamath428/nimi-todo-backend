import express from 'express';
import connection from './database.js';

const PORT = 5000;

const app = express();

app.listen(PORT,()=>console.log(`app is running on port:${PORT}`));