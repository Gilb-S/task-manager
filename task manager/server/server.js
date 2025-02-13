// const express = require("express");
// require("dotenv").config();
// const  taskRoutes = require("./routes/taskRoutes");

import express from "express";
import dotenv  from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());  // This is correct


app.use('/tasks', taskRoutes);

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
})

