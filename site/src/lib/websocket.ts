//modules
import OSC from 'osc-js';
import { customAlphabet } from 'nanoid'
import { nolookalikes } from 'nanoid-dictionary';
import { metadata } from '../../../lib/metadata'

function generateID (): string {
    const nanoid = customAlphabet(nolookalikes, 6);
    let id: string = nanoid();
    return "p-" + id;
}

let osc: any = null;
let ws: WebSocket;

export function connectWebsocket (app: string, host: string, port: number, openCallback: Function, errorCallback: Function, closeCallback: Function) {
    switch (app) {
        case "unreal": {
            ws = new WebSocket("ws://" + host + ":" + port);
            // Connection opened
            ws.addEventListener('open', (event) => {
                openCallback();
            });

            // Listen for messages
            ws.addEventListener('message', (event) => {
                console.log('Message from server ', event.data);
            });

            ws.addEventListener('error', (event) => {
                errorCallback(event);
            });

            break;
        }

        case "unity": {
            osc = new OSC();

            osc.open({ host: host, port: port })

            osc.on('error', function (error: any) { errorCallback(error) });

            osc.on('open', function () {
                openCallback();
            });

            osc.on('/phiz', function (message: any) {
                console.log(message.args)
            });

            osc.on('close', function () {
                closeCallback();
            })
            break;
        }

    }
}


export function sendWebsocketMessage (app: string, address: string, ...input: any[]) {
    switch (app) {
        case "unreal": {
            //unreal experimental websocket doesn't support binary data          
            let array = [address, ...input];
            ws.send(array.toString())
            break;
        }
        case "unity": {
            let message = new OSC.Message(address);
            input.forEach((arg: any) => {
                message.add(arg);
            })

            osc.send(message);
            break;
        }
    }

}