const path = require('path');

var config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        } 
        ]
    },
    plugins: [

    ]
}

// if I want to change the behavior according to the mode variable inside the webpack.config.js
module.exports = (env, argv) => {
    if(argv.mode === 'development') {
        config.devtool = 'source-map';
    }
    if(argv.mode === 'production'){
        // ...
    }
    return config
}

module.exports = config;