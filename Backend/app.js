const dotenv = require('dotenv');
dotenv.config();
const express=require("express")
const cors=require('cors')
const cookieParser = require('cookie-parser');
const app=express()
const connectToDB = require('./DB/db.js')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

connectToDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Hello World")
})
 
app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

module.exports = app