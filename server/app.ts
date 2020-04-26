import express from 'express';
import * as http from 'http';
import socket from 'socket.io';
import process from 'process';

const app = express();
const server = http.createServer(app);
const io = socket(server);

server.listen(process.env.PORT || 8080);

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

io.on('connection', socket => {
    socket.emit('news', { hello: 'world'});
})

