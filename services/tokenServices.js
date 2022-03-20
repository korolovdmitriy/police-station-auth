const jwt = require("jsonwebtoken");
const tokenModel = require("../models/tokenModel");

class TokenServices {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    });
    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = tokenModel.findTokenByUserId(userId);
    if (tokenData) {
      tokenModel
        .resaveUserToken(userId, refreshToken)
        .then(() => res.status(200).json("The user token was resave"))
        .catch((error) => res.status(404).send(error));
    }
    tokenModel
      .saveUserToken(userId, refreshToken)
      .then(() => res.status(200).json("The user token was save"))
      .catch((error) => res.status(404).send(error));
  }
}

module.exports = new TokenServices();
