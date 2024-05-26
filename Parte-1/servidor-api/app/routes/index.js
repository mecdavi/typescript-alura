let api = require('../api');

module.exports = function(app){
    app.route('/dados').get(api.dados)
    app.route('/negociacao').get()

}