import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackConfig = {
  entry: "./app/main.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node-modules/,
        use: "ts-loader",
      },
      {
        test: /\.jpg|jpeg|png/,
        exclude: /node_modules/,
        use: "file-loader"
      },
    ],
  },
};

export default webpackConfig;
