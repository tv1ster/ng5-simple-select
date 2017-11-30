var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var nodeModules = path.join(process.cwd(), 'node_modules');

module.exports = function makeWebpackConfig() {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  config.devtool = 'source-map';

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = {
    'polyfills': './demo/polyfills.ts',
    'main': './demo/main.ts'
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = {
    path: root('demo', 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  };

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */

  config.resolve = {
    modules: [root('demo'), 'node_modules'],
    // only discover files that have those extensions
    extensions: ['.ts', '.js', '.css', '.sass', '.scss', '.html'],
    alias: {
      'ng5-simple-select': path.resolve(__dirname, 'dist')
    }
  };

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    rules: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },

      // copy those assets to output
      {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, use: 'file-loader?name=fonts/[name].[hash].[ext]?'},

      // Vendor styles
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap-loader!postcss-loader'})
      },

      {
        test: /\.(scss|sass)$/,
        include: root('demo'),
        use: [
          "exports-loader?module.exports.toString()",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "importLoaders": 1
            }
          },
          {
            "loader": "sass-loader",
            "options": {
              "sourceMap": false,
              "precision": 8,
              "includePaths": []
            }
          }
        ]
      },

      // support for .html as raw text
      {test: /\.html$/, use: 'raw-loader'},

      {test: /\.md$/, use: 'html-loader!markdown-loader'}
    ],
    noParse: [/.+zone\.js\/dist\/.+/]
  };

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [

    new CommonsChunkPlugin({
      "name": "vendor",
      "minChunks": (module) => module.resource && module.resource.startsWith(nodeModules),
      "chunks": [
        "main"
      ]
    }),

    new CommonsChunkPlugin({
      names: ['vendor', 'polyfills', 'inline']
    }),

    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.LoaderOptionsPlugin({
      // add debug messages
      debug: true,
      minimize: false,
      /**
       * PostCSS
       * Reference: https://github.com/postcss/autoprefixer-core
       * Add vendor prefixes to your css
       */
      postcss: [
        autoprefixer({
          browsers: ['last 2 version']
        })
      ]
    }),

    new ExtractTextPlugin({ filename: 'css/[name].[hash].css', disable: true }),

    // Workaround to remove Webpack warning in system_js_ng_module_factory_loader.js
    // See https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('demo', 'app')
    )
  ];

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: 'demo/public',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  };

  return config;
}();

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
