const httpServer = require("./httpServer");
const PORT = 6969;

httpServer.on("connection", () => {
  console.log("CONNECTED TO HTTP SERVER");
});

httpServer.on("request", (req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.write("<html><head></head><body>Hello, World 0/</body></html>");
      res.end();
      break;
    case "/heartbeat":
      const hrtime = process.hrtime.bigint();
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(`{"heartbeat": ${hrtime}}`);
      res.end();
      break;

    default:
      res.write("404");
      res.end();
      break;
  }
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
