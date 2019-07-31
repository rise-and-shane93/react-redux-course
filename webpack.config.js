module.exports = {
  devtool: 'inline-sourcemap',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      }
    ]
  }
};
// const path = require('path');

// module.exports = {
//   entry: {
//     app: './index.js'
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },

//   module: {
//     rules: [{
//       test: /\.js$/, // include .js files
//       enforce: "pre", // preload the jshint loader
//       exclude: /node_modules/, // exclude any and all files in the node_modules folder
//       use: [{
//         loader: "jshint-loader",
//         // more options in the optional jshint object
//         options: {  // ⬅ formally jshint property
//           camelcase: true,
//           emitErrors: false,
//           failOnHint: false
//         }
//       }]
//     }]
//   },
// };

/*require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        javascript: "/index.js",
        html: "./index.html"
    },
    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
                loaders: ["react-hot", 'babel-loader'],
                query: {
                   presets : ['es2015', 'react']
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};*/