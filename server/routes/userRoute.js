// import express from "express";
import { Router } from "express";
import { handleGetReq, handleRegiser , handleLogin} from "../controllers/userControllers.js"; //importing the function from the controller

const router = Router();


router.get("/", handleGetReq);



//route for register
router.post("/register",handleRegiser);
//login router handler
router.post("/login", handleLogin);


//will export the router only
// module.exports = router;
export default router;