const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
    {
        name: 'dev',
        mode: 'development',
        devtool: 'eval',
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: "src/index.html" },
                    { from: "src/**/*.html", to: '[name].[ext]' }
                ],
            }),
        ],
        entry: {
            'main': './src/index.js',
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, './docs'),
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
            contentBase: './docs',
            port: 3000
        }
    },
];
