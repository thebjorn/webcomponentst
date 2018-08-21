
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.es6.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dk.js',
        library: 'dk',
        libraryTarget: "umd",
        libraryExport: "default",
        umdNamedDefine: true
    },
    externals: {jquery: 'jQuery'},
    module: { rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {presets: ['env']}
        }
    }]}
};
