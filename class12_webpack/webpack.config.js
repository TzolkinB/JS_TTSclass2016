module.exports = {
  entry: {
    // app: "./src/javascript/"
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
};

module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      { test: /\.js$/, loader: 'babel-loader', exclude: ['./node_modules/'] },
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
  }