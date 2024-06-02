import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const handleGetReq = (req, res) => {
  res.send("Hello from the server side");
};

const handleRegiser = async (req, res) => {
  const { fullname, email, password } = req.body;
  const storedUser = await User.findOne({ email });
  if (storedUser) return res.status(400).send("User already exist");
  else
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        const newUser = new User({
          name: fullname,
          email,
          password: hash,
        });
        const savedUser = await newUser.save();
        const payload = {
          id: savedUser._id,
          name: savedUser.name,
        };
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: 31556926 },
          (err, token) => {
            return res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      });
    });
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const myUser = await User.findOne({ email });
    //if user is not exist in our database
    if (!myUser) return res.status(400).send("No user found");
    //the hashed password that exist in our database
    const hashedPassword = myUser.password;
    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (err) throw err;
      else {
        //if the password is correct
        if (result === true) {
          const payload = {
            id: myUser._id,
            name: myUser.name,
          };
          jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: 31556926 },
            (err, token) => {
              return res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        }
        //if the password is incorrect
        else return res.status(400).send("Invalid user credentials");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export { handleGetReq, handleRegiser, handleLogin };
