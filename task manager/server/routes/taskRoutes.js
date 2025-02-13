// const express = require('express');
// const router = express.Router();
// const db = require('../db/connection.js');

import express from "express";
const router = express.Router();
import db from "../db/connection.js";

// get routes

router.get('/', (req, res) => {
    db.query("SELECT * FROM tasks" , (error, results) => {
        if(error) res.status(404).send({error: error.message});

        res.send(results);
    });
});

// get id 
router.get('/:id', (req, res) => {
    const {id} = req.params;

    db.query('SELECT * FROM tasks WHERE id = ?', [id], (error, results) => {
        if(error) res.status(404).send(error);

        res.send(results[0]);
    });
});


// create 
router.post('/' , (req, res) => {
    const {title, descript} = req.body;

    db.query('INSERT INTO TASKS (title, descript) VALUES (?, ?)', [title, descript], (error, results) => {
        if(error) res.status(404).send(error);

        res.send("task added successfully");
    })
});

// update 

router.put("/:id", (req, res) => {
    const {id} = req.params;
    const {title, descript, status} = req.body;

    db.query("UPDATE TASKS SET title = ?, descript = ?, status = ? WHERE id = ?", [title, descript, status, id], (error, results) => {
        if(error) res.status(404).send(error);

        res.send(" task Updated successfully")
    })
})


router.delete('/:id', (req, res) => {
    const {id} = req.params;

    db.query("DELETE FROM tasks WHERE id = ?", [id] , (error, results) => {
        if(error) res.status(404).send(error);

        res.send("task deleted successfully");
    })
})


export default router;