const express = require("express");
const socket = require("socket.io");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const server = app.listen(3001, () => {
  console.log("server running on 3001");
});

io = socket(server);

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("user joined room: " + socket.id);
  });

  socket.on("disconnect", () => {
    console.log("user DISCONNECTED");
  });
});
