import express from 'express';
import { addToDo,getAllToDo,getToDoById,deleteToDo,updateToDo,filterByPrority } from '../controllers/todo-controller.js';

const todoRouters = express.Router();

todoRouters.post('/add',addToDo);
todoRouters.get('/getAll',getAllToDo);
todoRouters.get('/getById/:id',getToDoById);
todoRouters.delete('/deleteById/:id',deleteToDo);
todoRouters.put('/update',updateToDo);

// Filtering routes
todoRouters.get('/filter/priority',filterByPrority)

export  default todoRouters;