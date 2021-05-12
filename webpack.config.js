const path = require('path');

module.exports = {
  entry: [
    './source/js/index.js',
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 1337,
    open: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'source/js'),
        use: {
          loader: 'babel-loader',
        }
      },
      // CSS
      {
        test: /\.less$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Less to CSS
          'less-loader',
        ],
      },
      // SVG
      {
        test: /\.svg$/,
        type: 'asset/resource',
        // use: 'svgo-loader',
        generator: {
          filename: 'img/[hash][ext]'
        },
      },
      // Images
      {
        test: /\.(webp|png|jpg|gif)$/i,
        loader: 'url-loader',
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]'
        },
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
      }
    ]
  },
  experiments: {
    asset: true
  },
  plugins: []
};
