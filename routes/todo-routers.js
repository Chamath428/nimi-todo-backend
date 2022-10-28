import express from 'express';
import { addToDo,getAllToDo,getToDoById,deleteToDo,updateToDo } from '../controllers/todo-controller.js';

const todoRouters = express.Router();

todoRouters.post('/add',addToDo);
todoRouters.get('/getAll',getAllToDo);
todoRouters.get('/getById/:id',getToDoById);
todoRouters.delete('/deleteById/:id',deleteToDo);

export  default todoRouters;