import express,{Request,Response} from 'express'

const router  = express.Router();

//hard coded json
const jsonData  =[
    {
        name: "James Jonah",
        age:23,
        gender: "Female",
        email:"james@gmail.com",
        role: "CEO"
    }
]
//
router.get("/",(req:Request, res:Response)=>{
    res.render("home",{
        staff:jsonData
    });
})

export default router

