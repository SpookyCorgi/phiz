const { Peer } = require('peerjs');
const fetch = require('node-fetch');
const WebSocket = require('ws');
const WebRTC = require('wrtc');
const FileReader = require('filereader');

const polyfills = { fetch, WebSocket, WebRTC, FileReader };

const peer = new Peer({ polyfills, debug: 3 });
let conn;

function createPeer (peerId) {
    //let peer = new Peer({ host: host, port: 9000, path: '/' });
    //use default server for prototyping
    let peer = new Peer({ polyfills });
    peer.on('open', function (id) {
        connectPeer(peer, peerId);
        console.log(`Connected to signalling server.\nMy id : ${id}\r\n`);
    });
    peer.on('connection', function (conn) { });
}

function connectPeer (peer, id) {
    if (conn) {
        conn.close();
    }

    conn = peer.connect(id, { serialization: 'json' });
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function () {
        // here you have conn.id
    });

    conn.on('data', function (data) {
        if (data) {
            let blendshapes = Object.values(data.blendshapes);
            let leftEye = Object.values(data.leftEyeRotation);
            let rightEye = Object.values(data.rightEyeRotation);
            let quaternion = Object.values(data.headQuaternion);
            let [dataSecond, dataMillisecond] = Object.values(data.time);

            //blendshapes
            if (blendshapes && blendshapes.length === 42) {
                console.log(blendshapes)
            }

            //eye rotation
            if (leftEye && rightEye && leftEye.length === 2 && rightEye.length === 2) {

            }

            //quaternion
            if (quaternion && quaternion.length === 4) {

            }

            //time
            if (dataSecond && dataMillisecond) {
                let date = new Date();
                latency =
                    (date.getSeconds() - dataSecond) * 1000 +
                    date.getMilliseconds() -
                    dataMillisecond;
            }
        }
    });
}

createPeer("p-IYcj7K");