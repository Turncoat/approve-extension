const path = require('path');

module.exports = {
  entry: {
    content: ['./src/content.js'],
    background: ['./src/background.js'],
    options: ['./src/options.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
        },
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
}
