const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    mode: "development",
    entry: {
      index: "./src/index.tsx",
    },
    output: {
      path: resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
            test: /\.[jt]sx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
      }),
    ],
};
