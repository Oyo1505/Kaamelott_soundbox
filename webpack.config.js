const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'production';
var assetsPath = path.join(__dirname, 'public/images');


let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js",
    },

    module: {
    
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets:[ 'es2015', 'react', 'stage-2' ]
         },

        },
        {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader'],
              })
        },
        {
          test: /\.html$/,
          use: [
                  {
                   loader: "html-loader",
                   options:{
                    name: "[name].html"
                   }
                  }
               ]
         },
           
           {
            test: /\.(png|jpg|gif|ttf|JPG)$/,
            use: [
              {
                loader: 'file-loader?limit=100000',
                options:{
                        name: 'images/[name].[ext]'
                      }
              
              },
            ]
          },
           
         {
          test: /\.mp3$/,
            use: [
                {
                  loader: 'file-loader',
                    options:{
                        name: 'sounds/kamelott/[name].[ext]'
                      }
                     
                  },
           ]
        },
         ],

       },
 
      plugins: [
        new ExtractTextWebpackPlugin("screen.css"),
        new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "./index.html"
        }),
      ],
      devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
        port: 3000,
      },
      devtool: "eval"
    
  }

if (NODE_ENV === 'production') {
  config.plugins.push(
  	new UglifyJsPlugin(),
  	new OptimizeCSSAssets()
  	);
}
module.exports = config;

