var HtmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
    plugin:[
        new HtmlWebpackPlugin({
            template:"./main.html"
        }),
        new ExtractTextPlugin("bundle.css")
    ],
    entry:{
        index:"./main.js"
    },
    output:{
        path:"dist",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.css/,
                loader:ExtractTextPlugin.extract(["css"])
            },
            {
                test:/\.(jpg|png|gif)/,
                loader:"file?name=imgs/[name].[ext]"
            },
            {
                test:/\.html/,
                loader:"html"
            }
        ]
    }
}