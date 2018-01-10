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
                loader: 'babel-loader',
                options: {
                    compact: true
                }
            }],
        }]
    }
}