//This would take a different name. Naming now is for clarity
import { Message, AddMessage, ReceiveAddResponse, SubtractMessage } from "./../types"  //needs better name, its late
import { configure, configureAddResponse, isReceiveAddResponse, endSession, add, subtract, configureSubtractResponse } from "./configuration"
export class ClientApi {
    workerThread: Worker
    callbackMap: { [name: string]: (args: any) => any }
    nextSession: Session
    constructor() {
        this.workerThread = new Worker("/worker.js")
        this.workerThread.onmessage = (msg: MessageEvent) => {
            const response = msg.data
            //This was going to go in a switch, but because the setup is being automagically
            //configured there should not be a failed state catch. But maybe? 
            if (isReceiveAddResponse(response))
                this.callbackMap[response.messageName](response.addedValue)
            //Additional options go below...
        }
    }
    public sendAdd = (number1: number, number2: number) =>
        this.workerThread.postMessage({
            messageName: "sendAdd",
            addValue1: number1,
            addValue2: number2
            } as AddMessage)
    public sendSubtract = (number1: number, number2: number) => 
            this.workerThread.postMessage({
                messageName: "sendSubtract",
                subtractValue1: number1,
                subtractValue2: number2                
            } as SubtractMessage)
    public end = () => this.workerThread.terminate()

    public recv = () => this.nextSession

}


//An attempt at implementing a fluent configuration api

//Create a private instance of the client that interacts with the worker thread
const client = new ClientApi()

const add = (number1: number, number2: number) => {
    client.sendAdd(number1, number2);
    return { sendAdd: add, end: end } as endSession & add;
}
const subtract =  (number1: number, number2: number) => {
    client.sendSubtract(number1, number2)
    return { sendAdd: add, end: end } as endSession & add & subtract;
}
const end = () => client.end

//create a config record
const config = {
    getSession: () => { return { sendAdd: add, end: end } as endSession & add }
} as configure

//create a set callback record
const setAddCallback = {
    setAddReceiveCallback: (callback) => {
        client.callbackMap["receiveAdd"] = callback
        return {...setSubtractCallback} as Omit<configureSubtractResponse,configure> 
    } 
} as configureAddResponse

const setSubtractCallback = {
    setReceiveSubtractCallback: (callback) => {
        client.callbackMap["receiveSubtract"] = callback
        return {...config, ...setAddCallback} as configureAddResponse & configure | configure
    }
}
//expose a public API
//it only returns the required configuration methods 
//there is an 'omit' keyword helper in TS that may allow 
//a more dynamic return value
//eg if configMethod1, configMethod2 and configMethod3 need to be set
//actually. i'll implement it to see if the compiler complains 
//I think a closure is required right here to encapsulate state 
export function start() {
    return {
        setAddReceiveCallback: setAddCallback.setAddReceiveCallback,
        setReceiveSubtractCallback: setSubtractCallback.setReceiveSubtractCallback
    } as configureAddResponse & configureSubtractResponse
}



/* This was trying to do some voodoo but I realized I need to interact with the typescript compiler API to pull it off */
// export function startClosure() {
//     //create a set callback record
//     const setAddCallback = {
//         setAddReceiveCallback: (callback) => {
//             client.callbackMap["receiveAdd"] = callback
//             return completedMethods.includes("configureAddResponse") ? config : {...config, ...setSubtractCallback}
//         }
//     } as (configureAddResponse & configureSubtractResponse)

//     const setSubtractCallback = {
//         setReceiveSubtractCallback: (callback) => {
//             client.callbackMap["receiveSubtract"] = callback
//             return completedMethods.includes("configureSubtractResponse") ? config : {...config, ...setAddCallback}
//         }
//     } as configureSubtractResponse | (configureAddResponse & configureSubtractResponse)


//     const completedMethods = []
//     return {
//         setAddReceiveCallback: (callback) => {
//             completedMethods.push("configureAddResponse")
//             return setAddCallback.setAddReceiveCallback(callback)
//         },
//         setReceiveSubtractCallback: (callback) => {
//             completedMethods.push("configureSubtractResponse")
//             return setSubtractCallback.setReceiveSubtractCallback(callback) 
//         } 
//     } as configureSubtractResponse & configureAddResponse
// }

