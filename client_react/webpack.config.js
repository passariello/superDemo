/*
  PLEASE DON'T CHANGE WITHOUT AUTHORIZATION
*/

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const CompressionPlugin = require("compression-webpack-plugin")
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

let pjson = require('./package.json')

module.exports = (env, argv) => {

  console.log(
    {
      version: pjson.version,
      codeName: pjson.appCode,
      relaseCodeName: pjson.appCodeRelease,
      relaseType: pjson.appType,
      appName: pjson.appName,
      root: pjson.appFolder,
      folderAPI: pjson.appAPI,
      port: argv.mode === 'development' ? pjson.appPortDev : pjson.appPort,
      api: argv.mode === 'development' ? pjson.apiDev : pjson.apiProd
    }
  )

  let api = argv.mode === 'development' ? pjson.apiDev : pjson.apiProd
  console.debug("\n\tYour API came from: " + api + "\n\n")

  return {

    mode: argv.mode === 'development' ? 'development' : 'production',
    devtool: argv.mode === 'development' ? 'eval-source-map' : 'cheap-module-source-map',
    stats: argv.mode === 'development' ? 'errors-warnings' : '',
    cache: argv.mode === 'development' ? false : true,
    target: 'web',

    devServer: {

      static: {
        directory: path.join(__dirname, 'dist'),
        publicPath: ['/', '/assets/'],
      },

      port: argv.mode === 'development' ? pjson.appPortDev : pjson.appPort,
      compress: argv.mode === 'development' ? false : true,
      magicHtml: argv.mode === 'development' ? true : false,
      liveReload: argv.mode === 'development' ? true : false,
      hot: argv.mode === 'development' ? true : false,
      historyApiFallback: true,
      open: false,

      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        'Accept-Encoding': '*',
        'Crossorigin': 'anonymous',
        'Author': 'Dario Passariello',
      },

      webSocketServer: 'ws',
      client: {
        overlay: argv.mode === 'development' ? true : false,
        webSocketTransport: 'ws',
        //progress: true,
        //logging: 'info',
      },

    },

    entry: {
      index: './src/index.tsx',
    },

    output: {
      filename: 'SuperDemo.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/'
    },

    performance: {
      hints: argv.mode === 'development' ? 'error' : false,
      maxEntrypointSize: 51200000,
      maxAssetSize: 51200000
    },

    optimization: {
      minimize: argv.mode === 'development' ? false : true,
      minimizer: [new TerserPlugin({
        exclude: [/static/, /public/]
      })]
    },

    resolve: {

      fallback: {
        "fs": false
      },

      alias: { "/": path.resolve(__dirname, '/') },

      modules: [path.resolve('node_modules')],
      extensions: [".ts", ".tsx", ".js", ".css", "scss"],
    },

    module: {

      rules: [
        // we use babel-loader to load our jsx and tsx files
        {
          test: /\.(ts|tsx|js|jsx)$/,
          loader: require.resolve('babel-loader'),
          exclude: [/node_modules/, /.OLD/],
          options: {
            //plugins: ['react-hot-loader/babel'],
            cacheDirectory: argv.mode === 'development' ? true : false,
          },
        },

        // html loader
        {
          test: /\.(htm)$/,
          loader: 'file-loader',
          options: { name: '[name].htm' },
        },

        // CSS, SCSS
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
              },
            },
            'sass-loader',
          ],
          include: /\.module\.s?(c|a)ss$/,
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /\.module\.s?(c|a)ss$/,
        },

        // assets
        {
          test: /\.(a?png|jpe?g|gif|ico|bmp|webb|svg)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
          // use: [ "file-loader" ],
          exclude: [/node_modules/, /.OLD/],
        },

        // fonts
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
          // use: [ "file-loader" ],
          exclude: [/node_modules/, /.OLD/],
        },

      ],
    },

    plugins: [

      //Environment
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode),
        'process.env': dotenv.parsed,
        'process.env.debug': argv.mode === 'development' ? true : false
      }),

      // Npm progress bar
      new ProgressBarPlugin(),

      // // Start file
      // new HtmlWebpackPlugin({
      //   title: pjson.appName,
      //   template: './src/html/index.html',
      // }),

      new CopyPlugin({
        patterns: [
          {
            from: "./public/",
            to: "./",
            globOptions: {
              gitignore: true,
            }
          }
        ],
      }),

    ],

  }

};


