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

export function connectWebsocket (host: string, port: number, openCallback: Function, errorCallback: Function, closeCallback: Function) {
    let osc = new OSC();

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
}