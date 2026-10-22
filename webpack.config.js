const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    mode: isProd ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: isProd ? "[name].[contenthash].js" : "[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // empties dist/ before each build
    },
    devtool: isProd ? "source-map" : "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"], // reload when the HTML changes too
      open: true,
      hot: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
    module: {
      rules: [
        { test: /\.css$/i, use: ["style-loader", "css-loader"] },
        { test: /\.html$/i, loader: "html-loader" },
        { test: /\.(png|svg|jpe?g|gif|webp)$/i, type: "asset/resource" },
        { test: /\.(woff2?|eot|ttf|otf)$/i, type: "asset/resource" },
      ],
    },
  };
};
