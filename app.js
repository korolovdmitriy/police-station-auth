require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerConfig = require("./configs/swagger-config.json");
const cookieParser = require("cookie-parser");
const policeUserRouter = require("./routes/policeUserRouter");

const PORT = process.env.PORT || 3000;
const specs = swaggerJsDoc(swaggerConfig);
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/policeUserApi-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/policeUser", policeUserRouter);

app.use((req, res, next) => {
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
