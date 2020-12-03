const path = require('path');
const { webpack } = require('webpack');

module.exports = {
    entry: 
            {
            first :    './src/first.ts',
            second : './src/second.ts',
            third : './src/third.ts',
            fourth : './src/fourth.ts'
        },

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
      contentBase : path.resolve(__dirname , 'dist'),
      port:9000,
    },

   mode:"development",
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/i,
            use: ['to-string-loader','style-loader', 'css-loader'],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          }
      ],
      },

      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },

  };
  