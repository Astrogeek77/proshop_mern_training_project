import jwt from "jsonwebtoken";

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

export default generateToken;
