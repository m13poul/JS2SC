 var socket = io.connect('https://uxjwidpuej.localtunnel.me/');


function Myfunction() {
    var PitchGranular = document.getElementById("PitchGranular").value
    console.log(PitchGranular);
    socket.emit('test', PitchGranular)
    var VolumeGranular = document.getElementById("VolumeGranular").value
    console.log(VolumeGranular);
    socket.emit('test', VolumeGranular);

}




/* var x = document.getElementById("VolumeGranular").value;
x.addEventListener('oninput', emitValue.bind(null, 'VolumeGranular'));

socket.on('connect', function(data) {
    socket.emit('Slider1', x);
}) */

/* document.getElementById("VolumeGranular").addEventListener("oninput", function(){
    
}) */
/* socket.emit('test', document.getElementById("VolumeGranular").value); */

 /* function Myfunction() {
    var x = document.getElementById("VolumeGranular").value;
    socket.on('connect', function(){
    socket.emit('test', x);
    })
} */

/* (function() {
    var socket = io.connect(window.location.hostname + ':' + 3000);
    var Slider1 = document.getElementById('VolumeGranular');
    var Slider2 = document.getElementById('range-1a');
    var Slider3 = document.getElementById('blue');

    function emitValue(color, e) {
        socket.emit('rgb', {
            color: color,
            value: e.target.value
        });
    }

    Slider1.addEventListener('change', emitValue.bind(null, 'Slider1'));
    Slider3.addEventListener('change', emitValue.bind(null, 'blue'));
    Slider2.addEventListener('change', emitValue.bind(null, 'range-1a'));

    socket.on('connect', function(data) {
        socket.emit('join', 'Client is connected!');
    });

    socket.on('rgb', function(data) {
        var color = data.color;
        document.getElementById(color).value = data.value;
    });
}()); */