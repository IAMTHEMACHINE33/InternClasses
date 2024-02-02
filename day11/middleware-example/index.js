const express = require("express");
const routes = require("./routers/index");

const app = express();

app.use("/api", routes);

app.listen(6969, () => {
  console.log(`Listening on port 6969`);
});
