"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.Server({ port: 8080 });
wss.on("listening", () => {
    console.log("listening");
});
wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        const DTO = message.toString();
        ws.send(DTO);
    });
});
//# sourceMappingURL=index.js.map