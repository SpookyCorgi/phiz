let blendshapes = [
    "browOuterUp_L",
    "browInnerUp_L",
    "browDown_L",
    "eyeBlink_L",
    "eyeSquint_L",
    "eyeWide_L",
    "eyeLookUp_L",
    "eyeLookOut_L",
    "eyeLookIn_L",
    "eyeLookDown_L",
    "noseSneer_L",
    "mouthUpperUp_L",
    "mouthSmile_L",
    "mouthLeft",
    "mouthFrown_L",
    "mouthLowerDown_L",
    "jawLeft",
    "cheekPuff",
    "mouthShrugUpper",
    "mouthFunnel",
    "mouthRollLower",
    "jawOpen",
    "tongueOut",
    "mouthPucker",
    "mouthRollUpper",
    "jawRight",
    "mouthLowerDown_R",
    "mouthFrown_R",
    "mouthRight",
    "mouthSmile_R",
    "mouthUpperUp_R",
    "noseSneer_R",
    "eyeLookDown_R",
    "eyeLookIn_R",
    "eyeLookOut_R",
    "eyeLookUp_R",
    "eyeWide_R",
    "eyeSquint_R",
    "eyeBlink_R",
    "browDown_R",
    "browInnerUp_R",
    "browOuterUp_R"
]
let list = document.getElementById("blendshapes");


document.getElementById("connect-btn")
    .addEventListener("click", connect);
let peer = null
let conn = null

function setStatus (status) {
    document.getElementById('status').innerText += status;
}

function cleanStatus () {
    document.getElementById('status').innerText = '';
}

function connect () {
    let input = document.getElementById('peer-url');
    let url = new URL(input.value);
    let host = url.host;
    let id = url.searchParams.get('id');

    cleanStatus();
    setStatus(`Connecting to server: ${host}\n`);
    createPeer(host, id);
}

function createPeer (host, peerId) {
    peer = new Peer({ host: host, port: 9000, path: '/' });
    peer.on('open', function (id) {
        connectPeer(peerId)
        setStatus(`Connected to signalling server. My id is ${id}\n`);
    });
    peer.on('connection', function (conn) {
    });
}

function connectPeer (id) {
    if (conn) {
        conn.close();
    }

    conn = peer.connect(id);
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function () {
        // here you have conn.id
        setStatus(`Connected to peer ${id}!`);

        blendshapes.forEach((blendshape, i) => {
            let li = document.createElement("li");
            li.innerHTML = `<p>${blendshape}</p> <p id=${i}-shape>0</p>`;
            list.appendChild(li);
        });
    });
    conn.on('data', function (data) {
        let blendshapes = new Uint8Array(data);

        blendshapes.forEach((blendshape, i) => {
            let num = blendshape / 100
            console.log(document.getElementById(`${i}-shape`));
            document.getElementById(`${i}-shape`).innerText = num;
        });
    });
}