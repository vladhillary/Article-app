const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './scripts/main_screen.js'),
        article: path.resolve(__dirname, './scripts/article.js'),
        createArticle: path.resolve(__dirname, './scripts/createArticle.js'),
        singIn: path.resolve(__dirname, './scripts/singIn.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bundle'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './pages/singIn.html',
            filename: 'singIn.html'
        }),
        new HtmlWebpackPlugin({
            template: './pages/article.html',
            filename: 'article.html'
        }),
        new HtmlWebpackPlugin({
            template: './pages/createArticle.html',
            filename: 'createArticle.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|png|svg|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    }
};