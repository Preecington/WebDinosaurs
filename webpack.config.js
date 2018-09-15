// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './scripts.ts',
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            }
        ]
    }
};