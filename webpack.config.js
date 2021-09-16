const dotenv = require('dotenv');
const {DefinePlugin} = require('webpack');
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = (env) => {

  console.log(env)

  const modeVars = {
    local: {
      filename: 'index_bundle.js'
    },
    dev: {
      filename: 'index_bundle.js'
    },
    live: {
      filename: 'index_bundle.js',
      publicPath: 'https://dansoup.co.uk/apps/portfolio-2021/'
    }
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname , 'dist'),
      filename: modeVars[env.MODE].filename,
      publicPath: modeVars[env.MODE].publicPath
    },
    module: {
      rules: [
        {test: /\.js$/, use:'babel-loader', exclude: /node_modules/},
        {test: /\.css$/, use:['style-loader', 'css-loader']},
        {test: /\.s[ac]ss$/, use:['style-loader', 'css-loader', 'sass-loader']},
        {test: /\.(png|jpe?g|gif)$/i, use:['file-loader']},
        {test: /\.(woff|woff2|eot|ttf|otf)$/i, use:['file-loader']}
      ]
    },
    mode: 'development',
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'src/index.html'
        }),
        new DefinePlugin({
          'process.env': JSON.stringify({
            ...dotenv.config().parsed,
            ...env
          })
        })
    ]
  }
}