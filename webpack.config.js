import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

// Workaround to define __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                quietDeps: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'html-loader', // Add html-loader to handle HTML processing
                    },
                    {
                        loader: 'nunjucks-webpack-loader',
                        options: {
                            searchPaths: [path.resolve(__dirname, 'src', 'templates')], // Path for Nunjucks templates
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.njk', 
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.njk',
            filename: 'about.html'
        }),
    ],
};
