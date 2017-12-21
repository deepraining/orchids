require('./css/index.css');

var orchids = {};

orchids.init = require('./handle/init');
orchids.start = require('./handle/start');
orchids.back = require('./handle/back');

orchids.registerPage = require('./handle/register_page');
orchids.registerDialog = require('./handle/register_dialog');
orchids.registerFragment = require('./handle/register_fragment');
orchids.startPage = require('./handle/start_page');
orchids.startPageForResult = require('./handle/start_page_for_result');
orchids.startDialog = require('./handle/start_dialog');
orchids.startDialogForResult = require('./handle/start_dialog_for_result');

orchids.getPage = require('./get/page_by_id');
orchids.getPageByIndex = require('./get/page_by_index');
orchids.getCurrentPage = require('./get/current_page');
orchids.getDialog = require('./get/dialog_by_id');
orchids.getDialogByIndex = require('./get/dialog_by_index');
orchids.getCurrentDialog = require('./get/current_dialog');

module.exports = orchids;