const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: 'index.html',
  title: 'Dev - Earthquake Zen Garden',
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    charset: 'UTF-8'
  }
});

module.exports = {

  mode: 'development',
  entry: { zen: path.resolve(__dirname, './src/index.js') },

  plugins: [ htmlPlugin ],

  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },

  devServer: {
    contentBase: './build',
    open: true,
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
