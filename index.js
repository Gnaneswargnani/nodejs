const mongoose  = require("mongoose");


mongoose.connect("mongodb+srv://tarun:codingschool@cluster0.dw7peel.mongodb.net/")
.then(()=>{console.log("Mongodb connected successfully")})

const express = require("express")
const {json , urlencoded} = require("express");
const { userRouter } = require("./routes/userroutes");
                                                                                                                                                                                               

const app = express()

app.use(json(),urlencoded({extended : false}))


app.get("/",(req,res)=>{
    res.send({msg : "Server Working"})
})

app.post("/getFormData" , (req,res) => {
    try {

        const {name , email , phone , passsword} = req.body
        
        res.send(name , email , phone , passsword)

    } catch (error) {
        res.send(error);
    }
})

app.use("/users",userRouter);

app.listen(1000,()=>console.log("Server running on port 1000"));