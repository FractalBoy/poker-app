import express from 'express';
import * as http from 'http';
import socket from 'socket.io';
import process from 'process';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webpackConfig from '../client/webpack.config';
import * as path from 'path';

const app = express();
const server = http.createServer(app);
const io = socket(server);

server.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV !== 'production') {
  webpackConfig.mode = 'development';
  const compiler = webpack(webpackConfig);
  app.use(middleware(compiler, { publicPath: '/' }));
} else {
  webpackConfig.mode = 'production';
  webpack(webpackConfig, (_error, stats) => {
    console.log(stats.toString({ colors: true, chunks: false, modules: false}));
    const outputPath = stats.toJson().outputPath;
    if (typeof outputPath !== 'undefined') {
      app.use('/', express.static(outputPath));
    }
  });
}

//app.get('/', (_req, res) => {
//  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
//});

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
});
