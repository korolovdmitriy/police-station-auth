const policeUserModel = require("../models/policeUserModel");
const tokenServices = require("../services/tokenServices");
const bcrypt = require("bcrypt");

class UserServices {
  async registrationUser(email, password) {
    const candidate = policeUserModel.findUserByEmail(email);
    if (candidate) {
      throw new Error(`User with this email ${email} already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    policeUserModel
      .createUser(email, hashPassword)
      .then(() => res.status(200).json("The User was add"))
      .catch((error) => res.status(404).send(error));
    // const userId = "afc8a1f8-94b5-11ec-b909-0242ac120002";
    const tokens = tokenServices.generateToken({ email });
    await tokenServices.saveToken(email, tokens.refreshToken);
    return { ...tokens, userEmail: email };
  }
}

module.exports = new UserServices();
