const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const goalRoutes = require('./routes/goals.routes');
const userRoutes = require('./routes/user.routes');

connectDB()

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

console.log('Hello!');
