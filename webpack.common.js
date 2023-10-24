const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require ('autoprefixer');

module.exports = {
    mode: "development",
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve("./src/popup/index.tsx"), 
        options: path.resolve("./src/options/options.tsx"),
        background: path.resolve("./src/background/background.ts"),
        contentScript: path.resolve('./src/contentScript/contentScript.ts'),
        newTab: path.resolve("./src/tabs/index.tsx")
    },
    module : { 
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader', // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                    type: 'assets/resource',
                    use: 'assets/resource',
                    test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.ts','.jsx']
    },
    output: {
        filename: '[name].js' 
    },
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        },
      },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: path.resolve('src/static/'),
             to: path.resolve('dist') 
            },
            ],
         }),  
         ...getHtmlPlugins([
            'popup',
            'options',
            'newTab'
         ])
      ],
}

function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlWebpackPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}