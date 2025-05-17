import express from 'express';
import connectDB from './config/db.js';
import router from './Routes/jobRoutes.js';
import cors from 'cors';

const app = express();

//database
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//routes

app.use('/api/jobs', router);

//port listing 
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})