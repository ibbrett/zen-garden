const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: 'index.html',
  title: 'Earthquake Zen Garden',
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    charset: 'UTF-8'
  },
  favicon: 'https://static.rdc-next-basecamp.rdc.moveaws.com/assets/favicon-144287b492113455703667bc3182768a9b2666765a1cd4beba38cfe40294eccc.ico'
});

module.exports = {

  // plugins are used for any other task that loaders can’t do
  plugins: [ htmlPlugin ],

  mode: 'production',

  entry: {
    zen: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },

  devServer: {
    openPage: 'build/index.html',
    open: 'Google Chrome',
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: [ __dirname, 'src', 'node_modules' ],
    extensions: [ "*", ".js", ".jsx", ".ts", ".tsx" ],
  }
};
