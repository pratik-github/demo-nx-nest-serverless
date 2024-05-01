const { NxWebpackPlugin } = require("@nx/webpack");
const slsw = require('serverless-webpack');
const { join } = require("path");

module.exports = {
  entry: slsw.lib.entries,
  output: {
    path: join(__dirname, "./dist"),
    libraryTarget: "commonjs",
  },
  plugins: [
    new NxWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      sourceMap: true
    }),
  ],
};
