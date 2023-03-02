const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

const config ={
    // entry : './src/index.js',
    entry : './src/kiwi.js',
    output:{
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        /*
            webpack5 bydefault sets publicPath: 'auto'
            in v < 5 default is publicPath: ''
            so we have to define publicPath

            clean: true to clean unnexessaryb old files < V5.20
        */
        publicPath:'/static/',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    mode: 'development', //none, developmentm, production
    devServer: {
        port: 9002,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
                index: 'kiwi.html',
                writeToDisk: true //to explicitly write the generated files to the dist folder
        }
    },
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
                    'style-loader', 'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
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
        new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns:[
        //         '**/*',
        //         path.join(process.cwd(), 'build/**/*')
        //     ]
        // }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            // chunks: ['kiwi'],
            title: 'Kiwi',
            template: 'src/page-template.hbs',
            description: "Kiwi",
            minify: false //by default it is true in production mode
            // filename: 'subfolder/custom_filename.html',
            // meta:{
            //     description: 'Some description'
            // }
        })
    ]
}

module.exports = config