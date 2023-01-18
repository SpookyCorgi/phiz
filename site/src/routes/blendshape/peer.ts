//modules
import { Peer } from 'peerjs';
import { customAlphabet } from 'nanoid'
import { alphanumeric } from 'nanoid-dictionary';
import { metadata } from '../../../../lib/metadata'
function generateID (): string {
    const nanoid = customAlphabet(alphanumeric, 6);
    let id: string = nanoid();
    return "p-" + id;
}

export function createPeer (openCallback: Function, connectCallback: Function) {
    //let peer = new Peer({ host, port, path });
    //use peer server for prototyping
    let peer = new Peer(generateID());
    //let peer = new Peer();
    peer.on('open', function (id) {
        openCallback(id);
    });
    peer.on('connection', function (conn) {
        let recieveMetadata = conn.metadata as { name: string, version: string }

        if (recieveMetadata.name !== metadata.name) {
            //conn.send({ connection: false, message: "Who are you? Why are you connecting to PHIZ?" });
            connectCallback(null)
            setTimeout(() => { conn.close() }, 3000);
            return;
        } else if (recieveMetadata.version !== metadata.version) {
            //conn.send({ connection: false, message: `The website is running on version ${metadata.version}, but you are running version ${recieveMetadata.version}. Please update your software at https://github.com/SpookyCorgi/phiz` });
            connectCallback(null)
            setTimeout(() => { conn.close() }, 3000);
            return;
        }
        connectCallback(conn)
    });
}