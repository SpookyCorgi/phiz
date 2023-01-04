//modules
import { Peer, util } from 'peerjs';

export function createPeer (host: string, port: number, path: string, openCallback: Function, connectCallback: Function) {
    //let peer = new Peer({ host, port, path });
    //use peer server for prototyping
    let peer = new Peer();
    //let peer = new Peer();
    peer.on('open', function (id) {
        openCallback(id);
    });
    peer.on('connection', function (conn) {
        connectCallback(conn)
    });
}