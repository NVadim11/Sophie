const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(fbx)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/models/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      three: path.resolve('./node_modules/three'),
    },
  },
};