require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./configs/swagger-config.json");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;

const specs = swaggerJsDoc(swaggerConfig);

const app = express();
app.use(express.json());

app.use("/policeUserApi-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());

// app.use("/policeUser", policeUserRouter);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
