import express from 'express';
import { addToDoModel } from '../models/todo-model.js';
import connection from '../database.js';

export const addToDo = async(req,res)=>{
    const query=`INSERT INTO todo (activity,description,date,start_time,end_time,status) VALUES ("${req.body.activity}","${req.body.description}","${req.body.date}","${req.body.start_time}","${req.body.end_time}",${req.body.status})`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send({"id":rows.insertId});
        }
    });
}

