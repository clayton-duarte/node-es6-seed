const autoprefixer = require('autoprefixer');
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
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },{
                loader: 'sass-loader'
            },{
                loader: 'postcss-loader',
                options: {
                    indent: 'postcss',
                    plugins: () => {
                        autoprefixer({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9',
                            ]
                        })
                    }
                }
            }],
        }]
    }
}
