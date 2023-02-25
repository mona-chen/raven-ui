/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: ['svg-inline-loader'],
      },
      {
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
      },
    ],
  },
}
