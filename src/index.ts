import express, {Request,Response} from "express"
const ejs  = require("express-ejs-layouts")
import path from "path";
import userRoute  from './routes/user'
import cookieParser from 'cookie-parser';
var logger = require('morgan');



const app = express();

const port  = process.env.PORT|| 3131

app.set("view engine","ejs");
app.set('views', path.join(__dirname, '.././views'));


app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: false }));//url encoded
app.use(logger('dev'));
app.use(cookieParser());
app.use("/home",userRoute);
app.use(express.json());





// app.get("/jerry",(req:Request,res:Response)=>{
//     res.render("home")
// })
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})



module.exports =  app;