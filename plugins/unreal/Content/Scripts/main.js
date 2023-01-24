const ipc = require('ipc-event-emitter').default(process);
const { Peer } = require('peerjs')
const fetch = require('node-fetch');
const WebSocket = require('ws');
const WebRTC = require('wrtc');
const FileReader = require('filereader');
const { customAlphabet } = require('nanoid');
const { alphanumeric } = require('nanoid-dictionary');

const polyfills = { fetch, WebSocket, WebRTC, FileReader };
let conn = null
let versionCheck = false;

function generateID () {
    const nanoid = customAlphabet(alphanumeric, 6);
    let id = nanoid();
    return 'p-' + id;
}

function connect (peer, id) {
    if (id == '') {
        console.log('No ID set');
        return;
    }
    if (conn) {
        conn.close();
    }
    conn = peer.connect(id, { metadata: { name: 'phiz', version: '0.1.0-beta' }, serialization: 'json' });
    conn.on('open', function () {
        console.log('Connected to peer id: ' + id);
    });
    conn.on('data', (data) => {
        if (data && data.connection && data.blendshapes && data.headRotation && data.leftEyeRotation && data.rightEyeRotation) {
            versionCheck = true
            ipc.emit('data', {
                "blendshapes": Object.values(data.blendshapes),
                "headRotation": Object.values(data.headRotation),
                "leftEyeRotation": Object.values(data.leftEyeRotation),
                "rightEyeRotation": Object.values(data.rightEyeRotation)
            });
        }
    })
    conn.on('close', () => {
        if (!versionCheck) {
            console.log('Your version 0.1.0-beta is outdated, please visit https://github.com/SpookyCorgi/phiz to update');
        }
    })
}

//Listen to 'connect' event
ipc.on('setID', (id) => {
    id = id;
    const peer = new Peer(generateID(), { polyfills });
    peer.on('open', function () {
        console.log('Connected to server');
        console.log('My peer ID is: ' + peer.id);
        connect(peer, id);
    })
});