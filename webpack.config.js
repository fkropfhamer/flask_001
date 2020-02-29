const path = require('path');

module.exports = [
    {
        entry: path.resolve(__dirname, 'public', 'index.js'),
        module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'app', 'static'),
        },
    },
    {
        entry: path.resolve(__dirname, 'public', 'about.js'),
        module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'about.js',
            path: path.resolve(__dirname, 'app', 'static'),
        },
    },
    {
        entry: path.resolve(__dirname, 'public', 'darkmode.js'),
        module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'darkmode.js',
            path: path.resolve(__dirname, 'app', 'static'),
        },
    }
];
