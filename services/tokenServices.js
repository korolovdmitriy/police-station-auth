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

  async saveToken(id, refreshToken) {
    const tokenData = tokenModel.findTokenByUserId(id);
    if (tokenData) {
      tokenModel.resaveUserToken(id, refreshToken);
    }
    tokenModel.saveUserToken(id, refreshToken);
  }
}

module.exports = new TokenServices();
