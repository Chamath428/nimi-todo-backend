import express from 'express';
import { addToDo,getAllToDo,getToDoById,deleteToDo,updateToDo,filterByPrority,filterByDuration } from '../controllers/todo-controller.js';

const todoRouters = express.Router();

todoRouters.post('/add',addToDo);
todoRouters.get('/getAll',getAllToDo);
todoRouters.get('/getById/:id',getToDoById);
todoRouters.delete('/delete/:id',deleteToDo);
todoRouters.put('/update',updateToDo);

// Filtering routes
todoRouters.get('/filter/priority',filterByPrority);
todoRouters.get('/filter/duration',filterByDuration);
export  default todoRouters;