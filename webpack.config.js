const path = require("path");

var entryPoints = { contact: "./src/contact.ts" };

module.exports = [
  {
    name: "dev",
    mode: "development",
    entry: entryPoints,
    devtool: "source-map",
    output: {
      filename: "[name].js",
      path: __dirname + "/dist",
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" },
      ],
    },
  },
  {
    name: "prod",
    mode: "production",
    entry: entryPoints,
    devtool: "source-map",
    output: {
      filename: "[name]-min.js",
      path: __dirname + "/dist",
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" },
      ],
    },
  },
];
