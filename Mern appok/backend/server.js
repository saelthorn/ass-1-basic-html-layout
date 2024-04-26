require('dotenv').config()
const express =require('express')
const connectDatabase = require('./database')
const workoutRoutes=require('./routes/workout')
//express app
const app=express()

//middleware
app.use(express.json())
app.use((req, res,next)=>{

    console.log(req.path, req.method)
    next()
})
//routes 
app.use('/api/workouts/',workoutRoutes)

//connect to db
connectDatabase();

    //listen for request from client or open server
app.listen(process.env.PORT,()=>{
    console.log(`listening on mah port ${process.env.PORT}`)
})
