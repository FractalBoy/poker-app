import * as path from 'path';
import * as PnpWebpackPlugin from 'pnp-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserWebpackPlugin({ cache: false, extractComments: false }),
    ],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: require.resolve('ts-loader') }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Poker</title>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `
  })],
};

export default config;
