const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const router = require("./routes/todo.route");
app.use(router);

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV != "test") {
  app.listen(port, () => {
    console.log(`Application running at localhost:${port}`);
  });
}

module.exports = app;
