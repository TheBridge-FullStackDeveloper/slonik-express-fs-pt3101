const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan");

const routes = require("./routes/index");

const db = require("./configs/db");

app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
