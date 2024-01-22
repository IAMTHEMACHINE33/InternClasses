const httpServer = require("./http");
const PORT = 6969;

httpServer.on("connection", () => {
  console.log("HTTP SERVER CONNECTED");
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
