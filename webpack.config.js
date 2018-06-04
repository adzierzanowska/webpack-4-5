const path = require('path');

//webpack.config.js

module.exports = (env) => {
    return {
        mode: env || 'production',
        entry: 'app.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js',


        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                }
            ]
        }
    }
};

