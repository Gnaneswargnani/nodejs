const express = require ("express")
const { createUserController } = require("../controllers/usercontroller")
                                      
const router =express()

router.post("/createUser",async (req,res)=>{
    const data =await createUserController(req.res)

    res.send(data)
})