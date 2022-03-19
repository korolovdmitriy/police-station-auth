const express = require("express");
const policeUserController = require("../controllers/policeUserController");
const policeUserRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *            - id
 *            - email
 *            - password
 *        properties:
 *            email:
 *              type: string
 *              description: User email
 *            password:
 *              type: string
 *              description: User password
 *        example:
 *            email: 1258@gmail.com
 *            password: ehhwetj651he
 *      Token:
 *        type: object
 *        required:
 *            - user
 *            - refreshToken
 *        properties:
 *            user:
 *              type: object
 *              description: User
 *            refreshToken:
 *              type: string
 *              description: User refresh token
 *        example:
 *            user: {email: 1258@gmail.com, password: ehhwetj651he}
 *            refreshToken: jdgjd
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authorization API
 */

/**
 * @swagger
 * /policeUser/registration:
 *   post:
 *     summary: Registration user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User has been registered *
 *       500:
 *         description: Server error
 */

policeUserRouter.post(
  "/registration",
  policeUserController.registrationPoliceUser
);

// policeUserRouter.post("/login", policeUserController.login);
// policeUserRouter.post("/logout", policeUserController.logout);
// policeUserRouter.get("/refresh", policeUserController.refresh);

module.exports = policeUserRouter;
