import express from 'express';
import { addToDoModel } from '../models/todo-model.js';
import connection from '../database.js';
import { logger } from '../logger.js';

export const addToDo = async(req,res)=>{
    const query=`INSERT INTO todo (activity,description,date,start_time,end_time,status,priority) VALUES ("${req.body.activity}","${req.body.description}","${req.body.date}","${req.body.start_time}","${req.body.end_time}",${req.body.status},${req.body.priority})`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(500).send(err);
            logger.error(`addToDo/500/(${req.originalUrl})/${req.method}/${err.message}`);
        }else{
            res.status(200).send({"id":rows.insertId});
            logger.info(`addToDo/200/(${req.originalUrl})/${req.method}/${rows.insertId}`);
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
            res.status(500).send(err);
            logger.error(`getAllToDo/500/(${req.originalUrl})/${req.method}/${err.message}`);
        }else{
            res.status(200).send(rows)
            logger.info(`getAllToDo/200/(${req.originalUrl})/${req.method}`);
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
            res.status(500).send(err);
            logger.error(`getToDoById/500/(${req.originalUrl})/${req.method}/${err.message}`);
        }else{
            res.status(200).send(rows);
            logger.info(`getToDoById/200/(${req.originalUrl})/${req.method}/${req.params.id}}`);
        }
    })
}

export const deleteToDo = async (req,res)=>{
    const query = `DELETE FROM todo WHERE id=${req.params.id}`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(500).send(err);
            logger.error(`deleteToDo/500/(${req.originalUrl})/${req.method}/${err.message}`);
        }else {
            res.status(200).send(rows);
            logger.info(`deleteToDo/200/(${req.originalUrl})/${req.method}/${req.params.id}`);
        }
        })
    }

export const updateToDo = async (req,res)=>{
    const query = `UPDATE todo SET status=${req.body.status} WHERE id=${req.body.id}`;

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(500).send(err);
            logger.error(`updateToDo/500/(${req.originalUrl})/${req.method}/${req.body.id}/${req.body.status}/${err.message}`);
        }else{
            res.status(200).send(rows);
            logger.info(`updateToDo/200/(${req.originalUrl})/${req.method}/${req.body.id}/${req.body.status}`);
        }
    })
}

export const filterByPrority = (req,res)=>{
    const query = "SELECT * FROM todo ORDER BY priority DESC";

    connection.query(query,(err,rows,fields)=>{
        if(err){
            res.status(500).send(err);
            logger.error(`filterByPrority/500/(${req.originalUrl})/${req.method}/${err.message}`);
        }else{
            res.status(200).send(rows);
            logger.info(`filterByPrority/200/(${req.originalUrl})/${req.method}`);
        }
    })
}

