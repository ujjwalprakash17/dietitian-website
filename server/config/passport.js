import passportJWT from "passport-jwt";
import dotenv from "dotenv";
import User from "../models/userModel.js"; // Ensure the correct path to your User model
import passport from "passport"; // Add missing import

dotenv.config();

// Configure Passport.js to use the JWT strategy for authentication. In your Node.js server code, add the following configuration

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY, // Replace with a secret key
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);
export default passport;
