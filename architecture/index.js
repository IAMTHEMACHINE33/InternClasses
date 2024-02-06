const express = require("express");
const port = process.env.PORT || 8000;

const languageRouter = require("./routers/language.rotuer");

const app = express();

app.set("view engine", "ejs");

app.use("/api", languageRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
