const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: 'js/app.js'
    },
    //处理路径(不需要.././等来寻找路径，直接跟文件名 page等)
    // resolve: {
    //     alias: {
    //         page:path.resolve(__dirname, 'src/page')
    //     }
    // },
    module: {
        rules: [
            //react(jsx)语法的处理
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            //css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //sass文件的处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //图片的配置
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name:'resource/[name].[ext]'//指定打包后的图片资源所在路径
                        }
                    }
                ]
            },
            //字体图标的配置
            {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:'resource/[name].[ext]'//指定打包后的字体图标资源所在路径
                    }
                }
            ]
            }
        ]
    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common',
        //     filename:'js/base.js'
        // })
    ],
        //提出公共模块
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: true,
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    devServer: {
        port:8080,
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
   },
};