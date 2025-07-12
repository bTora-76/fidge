import express from "express"
import connPool from "../middleware/connectDB.js"

const router = express.Router()



router.get("/", async (req,res)=>{

    try{
        
        const {username, password} = req.query;// it is more common to use param with get instead of body
        // get data from db
        const result = await connPool.query('SELECT * FROM user_info WHERE username = ? AND UserPassword = ? ', [username, password]);
        const data = result[0] // no need to get the buffer info
        const singleData = data[0] // is obj
        // if data

        // user found

        const {username : gotUserame, UserPassword : gotPassword}  = singleData;
        
        // all correct
        if (gotUserame === username && gotPassword === password){
            return res.status(200).json({msg: "User found! Correct Password. Proceed with the login"})
        }

        //user found but incorrect password
        if (gotUserame === username && gotPassword !== password){
            return res.status(200).json({msg: "User found! Incorrect Password. Proceed with the login"})
        }
        
        //user not found >> no need to care about password (shouldn't be checking anyways)
        return res.status(404).json({msg: "User not found! Proceed with the sign-up"})

        // res.status(200).json(data)
    }catch(err){
        res.status(500).json({Error : err})
    }

})


// for sign up page, used to create new user
router.post("/",(req,res)=>{
    // format >> {fullname, username, email, password}
    const newUserInfo = req.body;
    console.log(newUserInfo);

    res.end();
    


})



export default router;

