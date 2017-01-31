var $ = require('jquery');
var P2P = require('socket.io-p2p');
var io = require('socket.io-client');
var socket = io('http://10.168.1.20:3030');


var p2p = new P2P(socket);

$(document).ready(function(){
    $('#kick').click(function(){

        socket.emit('do-kick', { my: 'data' })
    });
});
