const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main_screen: path.resolve(__dirname, './scripts/main_screen.ts'),
        article: path.resolve(__dirname, './scripts/article.ts'),
        singIn: path.resolve(__dirname, './scripts/singIn.ts'),
        main: ['@babel/polyfill', './scripts/createArticle.ts'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bundle'),
        publicPath: '/'
    },

    devServer: {
        contentBase: [path.resolve(__dirname, 'scripts')],
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'scripts'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.sass']
    }
};