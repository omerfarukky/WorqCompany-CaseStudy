const express = require("express");
const cors = require("cors");
const config = require("./config");
const { todoRoute } = require("./routes");

config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
  console.log("port calisti");
  app.use(todoRoute);
});
