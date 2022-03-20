const policeUserModel = require("../models/policeUserModel");
const tokenServices = require("../services/tokenServices");
const bcrypt = require("bcrypt");

class UserServices {
  async registrationUser(email, password) {
    await policeUserModel.findUserByEmail(email).then((result) => {
      if (result[0]) {
        throw new Error(`User with this email ${email} already exists`);
      }
    });

    const hashPassword = await bcrypt.hash(password, 3);
    await policeUserModel.createUser(email, hashPassword);
  }

  async createUserTokens(email) {
    let id;
    await policeUserModel.findUserByEmail(email).then((result) => {
      id = result[0].id;
    });
    const tokens = tokenServices.generateToken({ email });
    tokenServices.saveToken(id, tokens.refreshToken);
    return { ...tokens, id };
  }
}

module.exports = new UserServices();
