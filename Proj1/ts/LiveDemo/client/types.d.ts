import { Client } from './CSFM.js'

export interface Message {
    MessageName: validNames
}

export interface SendImageMessage extends Message {
    greyScale: Array<number>
    width: number
    height: number
}

export interface SendRowMessage extends Message {
    Values: string
    Line: number 
}

export interface ReceiveRowMessage extends SendRowMessage {
    
}

export interface ReceiveCompleteMessage extends SendCompleteMessage {

}

export interface SendCompleteMessage extends Message {
    successful: boolean
}

export interface SendImageMessage {
   
}

export interface IClient {
} 

export interface State1 extends IClient {
    sendImage: (msg: SendImageMessage) => Promise<State1>
    End: () => null
}
//This isn't added to the final project but I'm considering a 3rd state for testing purposes 
export interface State2 extends IClient {
    End: () => any    
}


export interface State {
    privatename: StateLabel
    transitions: transition[]//Could generate enums for transistions 
    func: (args: any) => any
    types: string[] //Types and order of arguments 
}
export interface transition { 
    messageType: messageType
    payload: any
    name: StateLabel
} 
export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & 
            EventTarget;
}
//Client Configuration Types
export type Configure = BuildClient & 
                        SetImageCallback & 
                        SetSendImageCallback & 
                        SetImageCompleteCallback

export type BuildClient = {
    Build: () => State1 
}

//Configuration Callback Types

export type SetSendImageCallback = {
    SetSendImageTransitionCallback: (cb: (data: ReceiveCompleteMessage) => any) => Configure
}

export type SetImageCallback = {
    SetReceiveLineCallback: (cb: (data: ReceiveRowMessage) => any) => Configure
}

export type SetImageCompleteCallback = {
    SetImageCompleteCallback: (cb: (data: ReceiveCompleteMessage) => any) => Configure
}

//Worker Configuration Types 


//Should be broken into two different types for worker and client messages
export type StateLabel = 
    "Start" 
|   "SendImage"
|   "ReceivingLines"
|   "End"

export type messageType = 
        "SEND"
    |   "RECEIVE"
    |   "START"

export type validNames = "ReceivingLines" | "SendImage" | "ImageConverted" | "End"

export type SessionMessage = SendImage | Recv 

export interface SendImage {
    SendImage: (imageInfo: SendImageMessage) => Recv
}

export interface Recv {
    recv: () => Promise<SendImage>
}