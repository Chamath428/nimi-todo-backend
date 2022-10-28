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

export const getAllToDo = async (req,res)=>{
    const query = `SELECT 
                    todo.id,
                    todo.activity,
                    todo.description,
                    todo.date,
                    todo.start_time,
                    todo.end_time,
                    activity_type.type 
                    FROM todo
                    LEFT JOIN
                    activity_type
                    ON todo.status=activity_type.id`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(rows)
        }
    })
}

export const getToDoById = async(req,res)=>{
    const query = `SELECT 
                        todo.activity,
                        todo.description,
                        todo.date,
                        todo.start_time,
                        todo.end_time,
                        activity_type.type 
                        FROM todo
                        LEFT JOIN
                        activity_type
                        ON todo.status=activity_type.id
                        WHERE todo.id=${req.params.id}`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(rows);
        }
    })
}

export const deleteToDo = async (req,res)=>{
    const query = `DELETE FROM todo WHERE id=${req.params.id}`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(400).send(err);
        }else {
            res.status(200).send(rows);
        }
    })
}

export const updateToDo = async (req,res)=>{
    const query = `UPDATE todo SET status=${req.body.status} WHERE id=${req.body.id}`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(rows);
        }
    })
}

