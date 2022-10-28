import express from 'express';
import connection from '../database.js';
import joi from 'joi';

export const addToDoModel  = joi.object({
    activity:joi.string().required(),
    description:joi.allow(),
    date:joi.string().required(),
    start_time:joi.string().required(),
    end_time:joi.string().required(),
    status:joi.allow(),
    priority:joi.required().allow()
})