var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //页面入口文件配置
    entry: {
        name: [
            'eventsource-polyfill',
            './src/js/app.js',
        ]
    },
    //入口文件输出配置
    output: {
        path: './dist/',
        filename: 'bundle.js',
    },
    //其他配置
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        //加载器配置
        loaders: [
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract("style-loader","css-loader") 
            }, 

            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'es3ify-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony',            
            }, 
            {
             test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=8192&name=./images/[hash:8].[name].[ext]'
            }
        ],
        postLoaders: [
          {
            test: /\.js$/,
            loaders: ['es3ify-loader']
          }
        ]
    },
    //插件项
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin("style.css"),
    ]
};




