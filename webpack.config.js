const path = require("path");
const Dotenv = require('dotenv-webpack')

module.exports = {
  target: "node",
  node : {
    __dirname: true,
  },
  entry: {
    app: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "s3_disk_server.js"
  },
  plugins: [
    new Dotenv()
  ],
  optimization: {
    minimize: false,
  },
  externals: ['pg-hstore']
};
