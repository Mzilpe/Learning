const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

const config ={
    entry : './src/index.js',
    output:{
        // filename: 'bundle.js',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        /*
            webpack5 bydefault sets publicPath: 'auto'
            in v < 5 default is publicPath: ''
            so we have to define publicPath

            clean: true to clean unnexessaryb old files < V5.20
        */
        publicPath:'',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    mode: 'production', //none, developmentm, production
    module: {
        rules:[
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize: 3*10 //3 kilobytes
                    }
                }
            },
            {
                test:/\.txt/,
                type: 'asset/source'
            },
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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
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
            filename: 'styles.[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns:[
        //         '**/*',
        //         path.join(process.cwd(), 'build/**/*')
        //     ]
        // }),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            template: 'src/index.hbs',
            description: "Some Description",
            // filename: 'subfolder/custom_filename.html',
            // meta:{
            //     description: 'Some description'
            // }
        })
    ]
}

module.exports = config