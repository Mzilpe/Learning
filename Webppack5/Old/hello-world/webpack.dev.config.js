const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

const config ={
    // entry : './src/index.js',
    entry : './src/hello-world.js',
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
        publicPath:'/static',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    mode: 'development', //none, developmentm, production
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
                index: 'hello-world.html',
                writeToDisk: true //to explicitly write the generated files to the dist folder
        }
    },
    module: {
        rules:[
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
            filename: 'hello-world.html',
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: "Hello World",
            minify: false
        })
    ]
}

module.exports = config