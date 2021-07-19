const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main_screen: path.resolve(__dirname, './scripts/main_screen.js'),
        article: path.resolve(__dirname, './scripts/article.js'),
        // createArticle: path.resolve(__dirname, './scripts/createArticle.js'),
        singIn: path.resolve(__dirname, './scripts/singIn.js'),
        main: ['@babel/polyfill', './scripts/createArticle.js'],
        // test: path.resolve(__dirname, './scripts/singIn.ts')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'bundle'),
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
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
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
                    }
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