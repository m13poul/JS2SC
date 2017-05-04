var socket = io.connect('localhost:3000');


function Myfunction() {
    var PitchGranular = document.getElementById("PitchGranular").value
    console.log(PitchGranular);
    //socket.emit('test', PitchGranular)
    var VolumeGranular = document.getElementById("VolumeGranular").value
    console.log(VolumeGranular);
    socket.emit('test', [PitchGranular,  VolumeGranular]);

}
