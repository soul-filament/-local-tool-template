import { ServerAction } from "./actions";
import { logger } from "./log";

type respond = (message: any, data: any) => void
let log = logger('ws-actions')

const Handlers: any = {
    ['ServerAction.request'] : async (data: any, send: respond) => {
        send('ServerAction.provide', {})
    },
}

export async function OnClientMessage (send: respond, message: ServerAction, data: any){
    let handler = Handlers[message]
    if (handler) handler(data, send)
    else log.log(`No action for '${message}'`)
}