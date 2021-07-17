const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.html',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'bundle'),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './pages/singIn.html'}),
        new HtmlWebpackPlugin({ template: './pages/article.html'}),
        new HtmlWebpackPlugin({ template: './pages/createArticle.html'})
    ]
};