const model = require("../models/policeUserModel");
const userServices = require("../services/userServices");

class PoliceUserController {
  registrationPoliceUser(req, res) {
    const { email, password } = req.body;
    userServices.registrationUser(email, password).then((result) => {
      res.status(200).json(result);
    });
  }
}

module.exports = new PoliceUserController();
