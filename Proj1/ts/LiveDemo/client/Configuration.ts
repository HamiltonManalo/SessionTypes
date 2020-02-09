import { Client } from './CSFM.js'
import { StateLabel, messageType, Configure, BuildClient, ReceiveRowMessage, ReceiveCompleteMessage, State, transition } from './types'

const state1: State =  {
    name:  'Start',
    transitions: [
        {
            messageType: "Start" as messageType,
            payload: null,
            name: "SendImage" as StateLabel
        } as transition
    ],
    types: [],
    func:  null
} as State

const states: State[] = [
    {
        name:  'Start' as StateLabel,
        transitions: [
            {
                messageType: "Start" as messageType,
                payload: null,
                name: "SendImage" as StateLabel
            } as transition
        ],
        types: [],
        func:  null
    } as State,
    {
        name: 'SendImage' as StateLabel,
        transitions: [
    
            {
                messageType: "ReceiveLine" as messageType,
                payload: null, //need to figure out how to give it type information
                name: "ReceivingLines" as StateLabel
            }
        ],
        types: [],
        func: null
    },
    {
        name: 'ReceivingLines' as StateLabel,
        transitions: [
            {
                messageType: "ReceiveLine" as messageType,
                payload: null, //need to figure out how to give it type information
                name: "ReceivingLines" as StateLabel
            },
            {
                messageType: "SendImage" as messageType,
                payload: null, //need to figure out how to give it type information
                name: "SendImage" as StateLabel
            }
        ],
        types: [],
        func: null
    },
    {
        name: 'End' as StateLabel,
        transitions: [
            {
                messageType: "END" as messageType,
                payload: null,
                name: "End" as StateLabel
            }
        ],
        types: [],
        func: null
    }
]

const client = new Client(states) 


//The idea here is de-coupling configuration from design. The public object ConfigureClient is exposed to a user while the 'Client' class is a layer on top of a generalized state machine providing implementations around the provided communication protocol 
export const ConfigureClient = {
    SetReceiveLineCallback: (cb: (data: ReceiveRowMessage) => any) => {
        client.SetSendImageCallback(cb)
        return ConfigureClient
    },
    SetSendImageTransitionCallback:  (cb: (data: ReceiveCompleteMessage) => any) => { 

        return ConfigureClient
    },
    Build: () => client.Start() 

} as Configure

