const path = require('path');
module.exports = {
  entry: './app/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'app')]
      }
    ]
  },
  output: {
    filename: 'bundled_output.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer:{
    port: 7070,
    contentBase:path.resolve(__dirname, 'docs'),
    hot: true
  },
  mode:"development"
}