require('./css/orchids.css');

var orchids = {};

var app = require('./app');

orchids.init = app.init;
orchids.registerPage = app.registerPage;
orchids.registerDialog = app.registerDialog;
orchids.registerFragment = app.registerFragment;
orchids.startPage = app.startPage;
orchids.startPageForResult = app.startPageForResult;
orchids.startDialog = app.startDialog;
orchids.startDialogForResult = app.startDialogForResult;
orchids.back = app.back;
orchids.start = app.start;

orchids.getPage = app.getPageById;
orchids.getDialog = app.getDialogById;
orchids.getCurrentPage = app.getCurrentPageInstance;
orchids.getCurrentDialog = app.getCurrentDialogInstance;


// for debug
//orchids.app = app;

module.exports = orchids;