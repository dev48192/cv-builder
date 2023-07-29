const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    mode: "development",
    entry: ["regenerator-runtime/runtime.js", "./src/index.tsx"],
    output: {
      path: resolve(__dirname, "build"),
      filename: "bundle.js",
      publicPath: '/',
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx",".css",".scss"],
    },
    devServer:{
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ]
          },
          {
            test: /\.(png|jpe?g|svg)$/,
            type: 'asset/resource'
          }
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
