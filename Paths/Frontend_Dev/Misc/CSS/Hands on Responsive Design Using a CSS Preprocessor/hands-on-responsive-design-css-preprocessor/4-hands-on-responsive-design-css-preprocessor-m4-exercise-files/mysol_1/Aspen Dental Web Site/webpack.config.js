const path = require('path');

module.exports = {
    entry: [
        __dirname + '/src/js/app.js',
        __dirname + '/sass/styles.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'js/app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};