const userServices = require("../services/userServices");

class PoliceUserController {
  async registrationPoliceUser(req, res) {
    const { email, password } = req.body;
    try {
      await userServices.registrationUser(email, password);
      const tokens = await userServices.createUserTokens(email);
      res.status(200).json(tokens);
    } catch (error) {
      res.status(409).send(error.message);
    }
  }
}

module.exports = new PoliceUserController();
