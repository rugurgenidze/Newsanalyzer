
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        './index/index': './src/js/index.js',
        './about/about': './src/js/about.js',
        './paper/paper': './src/js/paper.js',
      },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[chunkhash].js',
        },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/images/'),
            },
          },
module: {
    rules: [{
        test: /\.js$/,
        use: { loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/,
          },
          {
            test: /\.css$/i,
            use: [(isDev ? 'style-loader' : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            }),
  
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                }
              },
              'postcss-loader',
            ]
          },
          {
            test: /\.(png|jpg|gif|ico|svg)$/i,
            use: [
              'file-loader?name=./images/[name].[ext]',
              {
                loader: 'image-webpack-loader',
              }
            ]
          },
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'file-loader?name=./vendor/[name].[ext]'
          },
        ]
      },
plugins: [ 
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
            }),
            
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      chunks: ['./index/index'],
      filename: 'index.html'
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: './src/about.html',
      chunks: ['./about/about'],
      filename: 'about.html',
    }),

    new HtmlWebpackPlugin({
      inject: false,
      template: './src/paper.html',
      chunks: ['./paper/paper'],
      filename: 'paper.html',
    }),
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
        ]    
}