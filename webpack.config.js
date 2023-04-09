const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // deployするときはproductionモードの方が良い？
  entry: path.resolve(__dirname, "./src/index.js"),

  module: {
    rules: [
      {
        test: /\.(?:js|jsx|mjs|cjs)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader", // 昔のブラウザでも対応させる
          },
        ],
      },
    ],
  },

  // コンパイルファイルの出力先？ コンパイルという表現あってる？ あってない
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
