/* Copyright: © 2019 Dario Passariello dariopassariello@gmail.com> */

module.exports = (env: any, args: any) => {

  const
    status = args.mode === "development" ? true : false,
    webpack = require("webpack"),
    // HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyPlugin = require("copy-webpack-plugin"),
    TerserPlugin = require("terser-webpack-plugin"),
    dotenv = require('dotenv').config({ path: __dirname + '/.env' }).parsed,
    path = require('path'),

    packs = require('./package.json'),
    DIST_DIR = path.resolve(__dirname, 'dist'),

    constants = {
      DEV: status,
      NAME: packs.app.name,
      VERSION: packs.version,
      CODENAME: packs.app.code,
      TYPE: packs.app.type,
      PORT: packs.app.port,
      MODE: args.mode,
      KEY: dotenv.KEY,
      LOCAL: Boolean(env.LOCAL),
      PROXY: packs.app.proxy,
      SOCKET: packs.app.socket
    }

  console.table(packs.contributors)

  console.log(constants)

  // console.table(
  //   Object.entries(constants).map(o => {
  //     return {
  //       key: o[0],
  //       value: o[1]
  //     }
  //   })
  // )

  return {

    devtool: constants.DEV ? 'inline-cheap-module-source-map' : false, //'cheap-module-source-map', //'nosources-source-map' //eval-source-map
    mode: constants.MODE,
    infrastructureLogging: { level: 'error' },
    target: 'web',
    profile: false,

    // cache: false,
    cache: constants.DEV
      ? {
        type: 'memory',
        cacheUnaffected: true,
        // compression: 'brotli',
        // type: 'filesystem',
        // allowCollectingMemory: true,
        // cacheDirectory: path.resolve(__dirname, '.cache'),
        // buildDependencies: {
        //   config: [__filename]
        // }
      } : false,

    stats: {
      errorDetails: constants.DEV,
      errorStack: constants.DEV
    },

    devServer: {

      port: constants.PORT,
      compress: !constants.DEV,
      // liveReload: constants.DEV,
      // hot: constants.DEV,
      hot: false,
      open: false,

      proxy: Object.entries(packs.app.proxy)
        .map(
          item => {
            return {
              context: [`/${item[0]}`],
              secure: false,
              // changeOrigin: true,
              // pathRewrite: { '^/api': '' },
              target: constants.LOCAL
                ? item[1]['tst']
                : constants.DEV
                  ? item[1]['dev']
                  : item[1]['pro'],
            }
          }
        ),

      server: {
        options: {
          spdy: true,
          http2: true
        },
      },

      static: {
        directory: `${DIST_DIR}`,
        publicPath: `/`
      },

      historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: '/' }
        ]
      },

      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        'Author': packs.author.name,
      },

      client: constants.DEV ? {
        logging: 'none',
        webSocketTransport: 'ws',
        overlay: false,
        progress: true,
      } : false,

    },

    entry: constants.DEV ? {
      app: ['./src/index.tsx'],
      hot: 'webpack/hot/dev-server.js',
      client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true'
    } : {
      app: ['./src/index.tsx']
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true
    },

    optimization: {
      minimize: args.mode === 'development' ? false : true,
      minimizer: [new TerserPlugin({
        exclude: /static/,
      })]
    },

    externals: {
      'ConfigData': {
        author: packs.author.name,
        URL: packs.author.url
      }
    },

    performance: {
      maxEntrypointSize: 102400000,
      maxAssetSize: 102400000,
      hints: constants.DEV
        ? 'error'
        : false
    },

    resolve: {

      fallback: {
        "fs": false,
        "os": false,
        "buffer": false
      },

      alias: { "/": path.resolve(__dirname, '/') },

      modules: [path.resolve('node_modules')],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".less", ".css", ".sass", ".scss"],
    },

    module: {

      rules: [

        {
          test: /\.*$/,
          exclude: [
            /archive/,
            /node_modules/,
            /.OLD/,
            /#OLD/
          ]
        },

        // we use babel-loader to load our jsx and tsx files
        {
          test: /\.(ts|tsx|js|jsx)$/,
          include: /(src|assets|public\/assets)/,
          use: [
            {
              loader: 'thread-loader',
              options: {
                workers: 4,
                poolRespawn: false,
                workerParallelJobs: 50,
                poolParallelJobs: 250,
              }
            }, {
              loader: 'babel-loader',
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript"
                ],
                sourceMap: constants.DEV,
                cacheDirectory: !constants.DEV,
                compact: !constants.DEV
              }
            }
          ]
        },

        // plain file loader
        {
          test: /\.(htm|txt|glsl)$/i,
          loader: 'file-loader',
          include: /(src|assets|public\/assets)/,
        },

        // CSS, SCSS
        {
          test: /\.(s?(c|a)ss)(\?v=\d+\.\d+\.\d+)?$/i,
          include: /(src|assets|public\/assets)/,
          use: [
            {
              loader: "style-loader"
            }, {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: false,
                sourceMap: false,
                url: false
              },
            }, {
              loader: "sass-loader"
            }
          ]
        },

        // css-loader and less-loader
        {
          test: /\.(less)(\?v=\d+\.\d+\.\d+)?$/i,
          use: [
            {
              loader: "style-loader"
            }, {
              loader: "css-loader",
              options: {
                sourceMap: false,
                modules: true,
                url: false
              }
            }, {
              loader: "less-loader",
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ]
        },

        // assets
        {
          test: /\.(a?png|jpe?g|gif|ico|bmp|webb|svg)(\?v=\d+\.\d+\.\d+)?$/i,
          type: 'asset/resource'
        },

        // fonts
        {
          test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/i,
          type: 'asset/resource'
        },

        // audio
        {
          test: /\.wav$/,
          type: 'asset/resource'
        }

      ]
    },

    plugins: [

      // Environment
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(constants)
      }),

      new webpack.ContextReplacementPlugin(
        /\/package-name\//,
        data => {
          delete data.dependencies[0].critical
          return data
        }
      ),

      // // Provide
      // new webpack.ProvidePlugin({
      //   process: 'process/browser',
      //   Buffer: ['buffer', 'Buffer']
      // }),

      // All stuff
      // new HtmlWebpackPlugin(
      //   Object.assign(
      //     {},
      //     {
      //       // alwaysWriteToDisk: true,
      //       title: constants.NAME.toUpperCase(),
      //       filename: `${DIST_DIR}/index.html`,
      //       template: `./src/app/index.html`,
      //       inject: true,
      //       hash: false
      //     },
      //     constants.MODE !== 'DEV'
      //       ? {
      //         minify: {
      //           removeComments: true,
      //           collapseWhitespace: true,
      //           removeRedundantAttributes: true,
      //           useShortDoctype: true,
      //           removeEmptyAttributes: true,
      //           removeStyleLinkTypeAttributes: true,
      //           keepClosingSlash: true,
      //           minifyJS: true,
      //           minifyCSS: true,
      //           minifyURLs: true
      //         }
      //       }
      //       : undefined
      //   )
      // ),

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

      // new CopyPlugin({
      //   patterns: [
      //     {
      //       from: `./public`,
      //       to: `${DIST_DIR}/`,
      //       noErrorOnMissing: true,
      //       globOptions: {
      //         gitignore: true
      //       }
      //     },
      //     {
      //       from: `./types`, to: `${DIST_DIR}/types`,
      //       noErrorOnMissing: true,
      //       globOptions: { gitignore: true }
      //     },
      //     {
      //       from: `./.github`, to: `${DIST_DIR}/`,
      //       noErrorOnMissing: true,
      //       globOptions: { gitignore: true }
      //     },
      //   ],

      //   options: {
      //     concurrency: 500
      //   }

      // }),

      // Hot Module Replacement
      new webpack.HotModuleReplacementPlugin()

    ]

  }

}
