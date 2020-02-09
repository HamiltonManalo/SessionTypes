import { State, StateLabel, SendImageMessage, validNames as label, Message, ReceiveRowMessage, State1, IClient, SendImageMessage, ReceiveCompleteMessage, SessionMessage } from './types'

class StateMachine {
    private map: { [name: string]: State } = {};
    workerThread: Worker
    private _currentState: StateLabel
    private _nextSession: SessionMessage
    constructor(states: Array<State>) {
        states.map(state => this.map[state.name.toString()] = state)
        this.workerThread = new Worker("../worker/worker.js", {type: "module"})
        this.workerThread.onmessage = (msg: MessageEvent) => {
            const response = msg.data
            const cb = this.map[response.MessageName].func
            if(cb == null) throw new Error(`no callback configured for ${response.MessageName}`)
            cb(response)
        }
    }

    //Needs transitions on all states 
    public SendImage = (msg: SendImageMessage) => {
        const stateTransit = this.transit("SendImage")
        if (stateTransit !== null) {
            this.workerThread.postMessage({
                MessageName: "SendImage",
                Image: msg
            } as SendImageMessage)
            return {
                sendImage: this.sendImage,
                End: this.End
            } as State1
        }
        return null
    }

    public End = () => {
        const stateTransit = this.transit("End")
        if (stateTransit !== null) //may not work because of return value
            this.workerThread.terminate()

        return null
    }

    public Start = () => {
        const stateTransit = this.transit("Start")
        return {
            sendImage: this.sendImage,
            End: this.End
        } as State1
    }

    public Recv = () => this._nextSession

    private transit = (nextState: StateLabel) => {
        if (nextState == 'Start') {
            return this._currentState = nextState
        }
        if (this.map[nextState] == null)
            throw new Error("aint no state here, bub");
        const state = this.map[this._currentState];
        if (state.transitions.find(transition => transition.name == nextState) != undefined) {
            const newState = this.map[nextState];
            this._currentState = newState.name;


            return newState
        } else {
            throw new Error("Not a valid transistion");
        }
    }
    //This is where i think i need a data-flow diagram. 
    //how would this action be related to the users desired outcome? 
    //example: if its an incoming message, would this be a reactive configuration
    //the worker pushes a message and the main thread responds?
    //and in the case of an Main -> Worker message would the new action need to be added to the next state and than fired off? 
    //But in this format incoming messages will be handled by callback 
    //and branching needs to be considered 

    //May need to do runtime checking that the objects being passed in match the types provided. Adding types as an array to State
    //Idea was passing an object in to give the callback 
    // if(newState.func != null) {
    //     newState.func.call(null, this.workerThread); 
    // }
    // else {
    // newState.func.call(null); 
    // }
    //changed from prior implmentation to get the state and set the cb for it. 
    public setCallback = (name: label, cb: (msg: any) => any) => this.map[name].func = (msg: any) => {
        // const transistion = this.transit(msg.MessageName); 
        cb(msg)
    }
}

//exposed types 

export class Client implements IClient {
    private client: StateMachine
    constructor(states: Array<State>) {
        this.client = new StateMachine(states)
    }
    public Start = () => this.client.Start()

    public SetSendImageCallback = (cb: (msg: ReceiveRowMessage) => any) => {
        this.client.setCallback('ReceivingLines', cb)
    }
    //Needs a better name, the idea is that once the state transitions back to "SendImage" a callback resets the UI to allow another image to be loaded
    public SetImageCompleteCallback = (cb: (data: ReceiveCompleteMessage) => any) => this.client.setCallback('ImageConverted', cb)
}


//Generate Worker Session

function isReceiveRow(msg: Message): msg is ReceiveRowMessage {
    return isMessage(msg) && (msg as ReceiveRowMessage).Values !== undefined
}

function isMessage(msg: Message): msg is Message {
    return msg.MessageName !== undefined
}