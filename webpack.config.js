module.exports = {
    entry: __dirname + '/index.js',
    target: 'node',
    output: {
        path: __dirname + '/pack',
        filename: 'module.js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{ 
                loader: 'babel-loader'
            }],
        },{
            test: /\.(sass|scss|css)$/,
            use: [{ 
                loader: "style-loader"
            },{
                loader: "css-loader"
            },{
                loader: "sass-loader"
            }],
        }]
    }
}