import { Message, SendImageMessage } from "../client/types";
import {worker} from './worker'
export module WorkerConfiguration {
    const callbacks: {[name: string]: (msg: any, ctx: Worker) => any} = {}
    export function HandleSendImage(cb: (msg: SendImageMessage, ctx: Worker) => any) {
        callbacks["SendImage"] = cb
        return {
            Build: () => callbacks
        }
    }
}