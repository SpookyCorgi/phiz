//modules
import { Peer, util } from 'peerjs';
import { customAlphabet } from 'nanoid'
import { alphanumeric } from 'nanoid-dictionary';

function generateID (): string {
    const nanoid = customAlphabet(alphanumeric, 6);
    let id: string = nanoid();
    return "p-" + id;
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