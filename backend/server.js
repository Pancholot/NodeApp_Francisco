const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use(errorHandler)
app.listen(port,()=>console.log(`Servidor iniciando en el puerto ${port}`))