var http = require('http')
let app  = require('./config/express');

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});