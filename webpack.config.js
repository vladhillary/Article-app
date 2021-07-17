const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './index.html'),
        article: path.resolve(__dirname, './page/article.html.html'),
        createArticle: path.resolve(__dirname, './page/createArticle.html'),
        singIn: path.resolve(__dirname, './page/singIn.html')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bundle'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './pages/singIn.html' }),
        new HtmlWebpackPlugin({ template: './pages/article.html' }),
        new HtmlWebpackPlugin({ template: './pages/createArticle.html' })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [

                ]
            }
        ]
    }
};