require('style!css!../css/orchids.css');

var orchids = {};

var app = require('./app');

// for debug
//orchids.app = app;

orchids.init = app.init;
orchids.start = app.start;
orchids.registerPage = app.registerPage;
orchids.registerDialog = app.registerDialog;
orchids.startPage = app.startPage;
orchids.startPageForResult = app.startPageForResult;
orchids.startDialog = app.startDialog;
orchids.startDialogForResult = app.startDialogForResult;
orchids.back = app.back;

orchids.getPage = app.getPageById;
orchids.getDialog = app.getDialogById;

window.orchids = orchids;

module.exports = orchids;