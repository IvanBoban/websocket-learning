import { Server } from "ws";

const wss = new Server({ port: 8080 });

wss.on("listening", () => {
  console.log("listening");
});

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    const DTO = message.toString();
    ws.send(DTO);
  });
});
