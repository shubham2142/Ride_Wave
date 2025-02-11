const dotenv = require('dotenv');
dotenv.config();
const express=require("express")
const cors=require('cors')
const app=express()
const connectToDB = require('./DB/db.js')
const userRoutes = require('./routes/user.routes')
connectToDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send("Hello World")
})
 
app.use('/users', userRoutes)

module.exports = app