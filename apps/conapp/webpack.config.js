const { NxWebpackPlugin } = require('@nx/webpack');
const slsw = require('serverless-webpack');
const { join } = require('path');

let isServe = false;

if (Object.keys(slsw.lib.entries).length === 0) {
  isServe = true;
}

module.exports = {
  entry: slsw.lib.entries,
  output: {
    path: isServe ? join(__dirname, './dist') : join(__dirname, './.webpack'),
    libraryTarget: 'commonjs',
  },
  plugins: [
    new NxWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: isServe ? './src/main.ts' : './src/lambda.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: false,
      sourceMap: true,
    }),
  ],
};
