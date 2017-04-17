var webpack = require('webpack');
var config = require('../webpack/webpack.config.js');

console.log('hello node', __dirname)

var compiler = webpack(config, function(err, stats) {
    if (err) {
        console.log('Error: ', err)
    }
    var statsJson = stats.toJson()
    if (statsJson.errors.length > 0) {
        console.log('Errors:')
        statsJson.errors.forEach(function(error) {
            console.log(error)
        })
    }
    if (statsJson.warnings.length > 0) {
        console.log('Warnings:')
        statsJson.warnings.forEach(function(warning) {
            console.log(warning)
        })
    }
});
require('./bundle.js');
