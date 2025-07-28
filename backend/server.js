import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.config.js';
import connectCloudinary from './config/cloudinary.config.js';
import adminRouter from './routes/admin.route.js';
import doctorRouter from './routes/doctor.route.js';
import userRouter from './routes/user.route.js';

//app config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


//api endpoints
app.use('/api/admin',adminRouter)
//localhost:4000/api/admin/add-doctor (or) whatever
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API Working Great")
})

app.listen(port,()=>{
    console.log("Server Started", port)

})
