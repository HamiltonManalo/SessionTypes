import { Client } from './CSFM.js';
const state1 = {
    name: 'Start',
    transitions: [
        {
            messageType: "Start",
            payload: null,
            name: "SendImage"
        }
    ],
    types: [],
    func: null
};
const states = [
    {
        name: 'Start',
        transitions: [
            {
                messageType: "Start",
                payload: null,
                name: "SendImage"
            }
        ],
        types: [],
        func: null
    },
    {
        name: 'SendImage',
        transitions: [
            {
                messageType: "ReceiveLine",
                payload: null,
                name: "ReceivingLines"
            }
        ],
        types: [],
        func: null
    },
    {
        name: 'ReceivingLines',
        transitions: [
            {
                messageType: "ReceiveLine",
                payload: null,
                name: "ReceivingLines"
            },
            {
                messageType: "SendImage",
                payload: null,
                name: "SendImage"
            }
        ],
        types: [],
        func: null
    },
    {
        name: 'End',
        transitions: [
            {
                messageType: "END",
                payload: null,
                name: "End"
            }
        ],
        types: [],
        func: null
    }
];
const client = new Client(states);
//The idea here is de-coupling configuration from design. The public object ConfigureClient is exposed to a user while the 'Client' class is a layer on top of a generalized state machine providing implementations around the provided communication protocol 
export const ConfigureClient = {
    SetReceiveLineCallback: (cb) => {
        client.SetSendImageCallback(cb);
        return ConfigureClient;
    },
    SetSendImageTransitionCallback: (cb) => {
        return ConfigureClient;
    },
    Build: () => client.Start()
};
