module.exports = {
  // entry: './app/app.ts',
  entry: './js/app.js',
  /*devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js'
  },*/
  devServer: {
    inline: false
  }
};
