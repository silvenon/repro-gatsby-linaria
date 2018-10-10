const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow',
                'linaria/babel',
              ],            
            },
          },
          'linaria/loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
}
