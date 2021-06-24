const {resolve} = require('path')

module.exports ={
    publicPath: './',
    outputDir: 'adminDist',
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
       
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
}