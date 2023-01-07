//modules
import { Peer, util } from 'peerjs';
import { nanoid } from 'nanoid'
function generateID (): string {
    let id: string = '';
    while (
        id === '' ||
        id.startsWith('-') ||
        id.endsWith('-') ||
        id.startsWith('_') ||
        id.endsWith('_')
    ) {
        id = nanoid(6);
    }

    return "PHIZ-" + id;
}

export function createPeer (host: string, port: number, path: string, openCallback: Function, connectCallback: Function) {
    //let peer = new Peer({ host, port, path });
    //use peer server for prototyping
    let peer = new Peer(generateID());
    //let peer = new Peer();
    peer.on('open', function (id) {
        openCallback(id);
    });
    peer.on('connection', function (conn) {
        connectCallback(conn)
    });
}