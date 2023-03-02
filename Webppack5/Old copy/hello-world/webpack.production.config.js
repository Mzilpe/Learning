const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

const config ={
    entry :  './src/hello-world.js',
    output:{
        // filename: 'bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        /*
            webpack5 bydefault sets publicPath: 'auto'
            in v < 5 default is publicPath: ''
            so we have to define publicPath

            clean: true to clean unnexessaryb old files < V5.20
        */
        publicPath:'/static',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    mode: 'production', //none, developmentm, production
    optimization: {
        splitChunks: {
            chunks:'all',
            minSize: 10000,
            automaticNameDelimiter: '-'
        }
    },
    module: {
        rules:[
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader', 'css-loader'
            //     ]
            // },
            // {
            //     test:/\.scss$/,
            //     use:[
            //         'style-loader', 'css-loader', 'sass-loader'
            //     ]
            // },

            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test:/\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            // filename: 'styles.[contenthash].css',
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns:[
        //         '**/*',
        //         path.join(process.cwd(), 'build/**/*')
        //     ]
        // }),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: "Hello World",
            minify: false //by default it is true in production mode
            // filename: 'subfolder/custom_filename.html',
            // meta:{
            //     description: 'Some description'
            // }
        }),
    ]
}

module.exports = config