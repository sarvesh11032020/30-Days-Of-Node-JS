// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');

// const app = express();
// const server = http.createServer(app);

// const wss = new WebSocket.Server({ server });

// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//       // Echo the received message back to the client
//       ws.send(message);
//     });
//   });

// app.get('/websocket', function(req, res) {
// res.sendFile(__dirname + '/websocket.html');
// });

// const PORT = process.env.PORT || 2000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

const express = require('express');
const http = require('http');
const webSocket = require('ws');

const app = express();
const server = http.createServer(app);

const wss = new webSocket.Server({ server });

function setWebSocket(server){
    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            ws.send(message);
        })
    })
}

app.get('/websocket', (req, res) => {
    res.sendFile(path.join(__dirname + '/websocket.html'));
});

setWebSocket(server);
server.listen(2000, () => {
    console.log(`Server is listening`);
})