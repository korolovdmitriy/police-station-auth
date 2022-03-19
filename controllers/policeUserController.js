const model = require("../models/policeUserModel");

class PoliceUserController {
  registrationPoliceUser(req, res) {
    res.status(200).json("result");
    // model
    //   .registrationPoliceUser()
    //   .then((result) => {
    //     res.status(200).json(result);
    //   })
    //   .catch((error) => res.status(404).send(error));
  }
}

module.exports = new PoliceUserController();
