$ = require('jquery');
require('aframe');
require('aframe-layout-component');
require('aframe-animation-component');

//var P2P = require('socket.io-p2p');
//var io = require('socket.io-client');
//var socket = io('http://localhost:3030');

//var p2p = new P2P(socket);


// this event will be triggered over the socket transport
// until `usePeerConnection` is set to `true`
//p2p.on('kick', function(data){
//    $('#kick')[0].setAttribute('scale', '1.1 1.1 1.1');
//    setTimeout(function(){
//        $('#kick')[0].setAttribute('scale', '1.0 1.0 1.0');
//    }, 100);
//    var sound = new Audio("sounds/Bass-Drum-2.mp3");
//    sound.play();
//});

AFRAME.registerComponent('kick', {

      init: function () {

        this.el.addEventListener('mouseenter', function (evt) {
            //socket.emit('do-kick', { my: 'data' })
            var sound = new Audio("sounds/Bass-Drum-2.mp3");
            sound.play();
        });
      }
});

AFRAME.registerComponent('mid-tom', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Mid-Tom-2.mp3");
            sound.play();
        });
      }
});

AFRAME.registerComponent('high-tom', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Hi-Tom-2.mp3");
            sound.play();
        });
      }
});

AFRAME.registerComponent('crash', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Crash-Cymbal-2.mp3");
            sound.play();
        });
      }
});


AFRAME.registerComponent('snare', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Ensoniq-ESQ-1-Snare.mp3");
            sound.play();
        });
      }
});

AFRAME.registerComponent('floor-tom', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Floor-Tom-2.mp3");
            sound.play();
        });
      }
});

AFRAME.registerComponent('high-hat', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Closed-Hi-Hat-2.mp3");
            sound.play();
        });
      }
});

AFRAME.registerComponent('ride', {
      init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            var sound = new Audio("sounds/Ensoniq-SQ-1-Ride-Cymbal.mp3");
            sound.play();
        });
      }
});