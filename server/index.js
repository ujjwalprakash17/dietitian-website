import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import path from 'path';  
const app = express();

//Middlewares
app.use(cors({
  origin: ["https://dietitian-website-cyan.vercel.app"],
  methods : ["POST", "GET"],
}));
app.use(bodyParser.json({ extended: true }));

//Connect to the database
connectDB();


//route for register and login
app.use("/", userRouter); //method to write the route in a separate file and / means the root route for the userRouter file


app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, 'client/build')));
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
