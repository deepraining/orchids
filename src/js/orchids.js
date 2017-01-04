var css = require('css-loader!../css/orchids.css');

var orchids = {};

orchids.app = require('./app');

window.orchids = orchids;

module.exports = orchids;