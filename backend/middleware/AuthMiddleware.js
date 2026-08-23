const {User} = require("../model/UserModel");

require("dotenv").config();

const jwt = require("jsonwebtoken");

//user ko vrify karne ke liye 

module.exports.userVerification = (req, res) => {

const token = req.cookies.token

if (!token) {

return res.json({ status: false })

}

jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {

if (err) {

return res.json({ status: false })
 } else {

const user = await User.findById(data.id)

if (user) return res.json({ status: true, user: user.username })

 else return res.json({ status: false })

}

})

}

//authentication or user ko req me store karne ke liye 
module.exports.authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }

    const data = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(data.id);

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User not found",
      });
    }

   
    req.user = user;

    next();

  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Invalid token",
    });
  }
};

