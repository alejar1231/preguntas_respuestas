// App file
const app = require("./src/main");
  
// Node Server
const server = require("http").createServer(app);

server.listen(3000, (err) => {
  if (err) throw new Error(err);

  console.log("Server running on port:", 3000);
});