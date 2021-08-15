const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

let conf = {
  mode: "development",
  entry: [
    './source/js/index.js',
  ],
  output: {
    // filename: '[name].[contenthash].js',
    // path: path.resolve(__dirname, 'build'),

    // Временно, для запуска Mamp
    filename: '[name].js',
    // for Mamp
    path: path.resolve(__dirname, '/Applications/MAMP/htdocs/filco/'),
    // for Mamp PRO
    // path: path.resolve(__dirname, '/Users/albertmuravcev/Sites/localhost/'),
  },
  target: 'web',
  devServer: {
    // contentBase: path.join(__dirname, 'build'),
    // for Mamp
    contentBase: path.join(__dirname, '/Applications/MAMP/htdocs/filco/'),
    compress: true,
    port: 1337,
    open: true,
    hot: true,
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // LESS
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
        generator: {
          filename: 'img/icons/[name][ext]'
        },
      },
      // Images
      {
        test: /\.(webp|png|jpg|gif)$/i,
        type: 'asset/resource',
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  experiments: {
    asset: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: './source/index.html',
      title: 'Caching'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'source/img/**/*',
          to: 'img/[name][ext]'
        }
      ]
    }),
    new SVGSpritemapPlugin('./source/img/sprite/*.svg', {
      output: {
        filename: 'img/sprite.svg'
      },
      sprite: {
        prefix: 'sprite-'
      }
    })
  ]
};

module.exports = (env, options) => {
  let mode = options.mode === 'production';
  conf.devtool = mode ? false : 'eval-cheap-module-source-map';

  return conf
}
