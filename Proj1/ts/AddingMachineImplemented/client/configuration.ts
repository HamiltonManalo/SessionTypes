import {ClientApi } from "./ClientApiClass"
import { configure, configureAddResponse} from "./configuration"
import {Message, AddMessage, ReceiveAddResponse} from "../types"

export interface configure {
    getSession: () => add & endSession
}
export interface subtract {
    sendSubtract: (number1: number, number2: number) => endSession & add & subtract
}
export interface add {
    sendAdd: (number1: number, number2: number) => endSession & add & subtract
}

export interface configureAddResponse {
    setAddReceiveCallback: (callback: (args: number) => void) => (configureSubtractResponse & configure) 
}

export interface configureSubtractResponse {
    setReceiveSubtractCallback: (callback: (args: number) => void) => configure | (configureAddResponse & configure)
}

export interface endSession {
    end: () => ClientApi["end"]
}

//the isType pattern is how you validate the type. Because there is no JS way of checking a type the TS website uses this pattern 

export function isMessage(msg: Message): msg is Message {
    return (msg.messageName !== undefined)
}

export function isAddMessage(msg: AddMessage): msg is AddMessage {
    return (msg.messageName !== undefined
         && msg.addValue1 !== undefined
         && msg.addValue2 !== undefined)
}

export function isReceiveAddResponse(msg: ReceiveAddResponse): msg is ReceiveAddResponse {
    return (msg.messageName !== undefined
         && msg.addedValue !== undefined)
}