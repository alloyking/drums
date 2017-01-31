var server = require('http').createServer();
var io = require('socket.io')(server);
var p2p = require('socket.io-p2p-server').Server;
io.use(p2p);
server.listen(3030);

io.on('connection', function(socket){

    socket.on('do-kick', function (from, msg) {
        console.log('kick');
        io.emit('kick', { hello: 'world' });
    });


});
