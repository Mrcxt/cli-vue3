// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const join = (dir) => path.join(__dirname, dir);

const DEV_URL = ""; // 开发

const isDev = process.env.NODE_ENV === "development";

const plugins = [];

if (process.env.analyzer) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  configureWebpack: {
    devtool: isDev ? "source-map" : "none",
    plugins,
  },
  // devServer: {
  //   proxy: {
  //     "/": {
  //       target: DEV_URL,
  //       changeOrigin: true,
  //     },
  //   },
  // },
};
