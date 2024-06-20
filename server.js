const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");

//dot configuration
dotenv.config();

// mongodb connection
connectDB();

//Storing all the functionalities
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes
app.use('/api/v1/test', require('./routes/testroutes'));
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes')); 
//port
const PORT = process.env.PORT || 9000;

//listen 
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} port ${process.env.PORT}`);
});