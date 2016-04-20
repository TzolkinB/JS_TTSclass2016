module.exports = {
  entry: {
    app: "./src/javascript/"
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }
};