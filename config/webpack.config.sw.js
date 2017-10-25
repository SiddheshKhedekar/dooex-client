const fs = require('fs');
const path = require('path');

const paths = require('./paths');

const DEST_DIR = paths.appPublic;

/**
 * Update `VERSION` veriable in service-worker script.
 * This allows loading fresh worker in browser.
 */
const serviceWorkerVersionWriter = {
  apply(compiler) {
    compiler.plugin('done', (stats) => {
      const swFilePath = path.join(DEST_DIR, 'sw.js');

      fs.writeFileSync(
        swFilePath,
        fs.readFileSync(swFilePath, 'utf8').replace('{{VERSION}}', new Date().getTime()),
      );
    });
  },
};

module.exports = {
  entry: {
    sw: path.join(paths.appSrc, 'sw'),
  },

  output: {
    filename: '[name].js',
    path: DEST_DIR,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['env'],
        },
      },
    ],
  },

  plugins: [serviceWorkerVersionWriter],

  target: 'web',
};
