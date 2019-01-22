module.exports = (process.env.NODE_ENV != 'production') ?
    require('./webpack.dev.config.js') :
    require('./webpack.prod.config.js')