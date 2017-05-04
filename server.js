var fs = require('fs');
var data = fs.readFileSync('sounds.json');
var sounds = JSON.parse(data);
console.log(sounds);

var express = require('express');
var app = express();
var path = require('path');

var server = app.listen(3000);

app.use(express.static(path.resolve(__dirname, 'client')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New Connection:', socket.id);
    socket.on('test', testmsg);
    function testmsg(test) {
        var values = test;
        var msg;
        console.log(test);
       //  console.log(test[0]);
        msg = {
            address: "/Methexis",
            args: [
                {
                    type: "b",
                    value: test
                }
            ]         
        };
        udpPort.send(msg);
    }
}
// Send to SuperCollider 
var osc = require("osc");

var udpPort = new osc.UDPPort({
    // This is the port we're listening on.
    localAddress: "127.0.0.1",
    localPort: 57121,

    // This is where sclang is listening for OSC messages.
    remoteAddress: "127.0.0.1",
    remotePort: 57120,
    metadata: true
});

// Open the socket.
udpPort.open();

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('/api/:sound/:value', changes);
function changes(request, responce) {
    var data = request.params;
    var sound = data.sound;
    var value = Number(data.value);
    
    sounds[sound] = value;
    var data = JSON.stringify(sounds);
    fs.writeFile('sounds.json', data, finished);

    function finished(err) {
    console.log('all set.');
    }
    var reply = {
        msg: "thank you"
    }
    responce.send(reply);
    
}

 app.post('/api', adddata);
function adddata(request, responce) {
    var data = request.params;
    var sound = data.sound;
    var value = Number(data.value);
    
    sounds[sound] = value;
    var data = JSON.stringify(sounds);
    fs.writeFile('sounds.json', data, finished);

    function finished(err) {
    console.log('all set.');
    }
    var reply = {
        msg: "thank you"
    }
    responce.send(reply);
} 



app.get('/api', SendApi);

function SendApi(request, responce) {
    responce.send(sounds);
    }


