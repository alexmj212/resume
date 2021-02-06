const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
    {
        name: 'dev',
        mode: 'development',
        entry: './src/index.js',
        devtool: 'eval',
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "src/components", to: "components" },
                    { from: "src/index.html" },
                ],
            }),
        ],
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /img\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        devServer: {
            contentBase: './dist',
            port: 3000
        }
    },
    {
        name: 'prod',
        mode: 'production',
        entry: './src/index.js',
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "src/components", to: "components" },
                    { from: "src/index.html" },
                ],
            }),
        ],
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /img\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        devServer: {
            contentBase: './dist',
            port: 3000
        }
    }
];
