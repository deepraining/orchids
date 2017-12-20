require('./css/index.css');

var orchids = {};

orchids.init = require('./handle/init');
orchids.registerPage = require('./handle/register_page');
orchids.registerDialog = require('./handle/register_dialog');
orchids.registerFragment = require('./handle/register_fragment');
orchids.startPage = require('./handle/start_page');
orchids.startPageForResult = require('./handle/start_page_for_result');
orchids.startDialog = require('./handle/start_dialog');
orchids.startDialogForResult = require('./handle/start_dialog_for_result');
orchids.back = app.back;
orchids.start = app.start;

orchids.getPage = app.getPageById;
orchids.getDialog = app.getDialogById;
orchids.getCurrentPage = app.getCurrentPageInstance;
orchids.getCurrentDialog = app.getCurrentDialogInstance;


// for debug
//orchids.app = app;

module.exports = orchids;