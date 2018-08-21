
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dk.js',
        library: 'dk',
        libraryTarget: "var",
    },
    externals: {
        jquery: 'jQuery',
        // lodash: 'lodash'
    },
    module: { rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {presets: ['env']}
        }
    }]}
};
