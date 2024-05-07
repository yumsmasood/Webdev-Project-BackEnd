import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hello, this is auth end-point")
})

router.get("/register", (req,res)=>{
    res.send("hello, this is register end-point")
})

// router.post("/register", register)
// router.post("/login", login)

export default router