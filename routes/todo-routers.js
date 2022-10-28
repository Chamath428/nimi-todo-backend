import express from 'express';
import { addToDo,getAllToDo,getToDoById,deleteToDo,updateToDo } from '../controllers/todo-controller.js';

const todoRouters = express.Router();

todoRouters.post('/add',addToDo);

export  default todoRouters;