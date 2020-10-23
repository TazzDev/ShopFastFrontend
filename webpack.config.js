const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader'
                },
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|mp4|mov|swf|webm)$/,
                use: [
                    'file-loader',
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true,
    }
}