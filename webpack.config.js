var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: "./main.jsx",
    output: {
        path: __dirname + "/js",
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    },
    plugins:[],
};
