import { workerConfig } from '../client/WorkerExecution.js'
export namespace worker {
    export function setActions(actions: { [name: string]: (msg: any, ctx: Worker) => any }) {
        for (let propertyName in actions) {
            callbackMap[propertyName] = actions[propertyName]
        }
    }
    const ctx: Worker = self as any;
    const callbackMap: { [name: string]: (msg: any, ctx: Worker) => any } = {}
    // import('../WorkerExecution.js')
    console.log("worker active")
    // setActions(vals)
    ctx.onmessage = (message: MessageEvent) => {
        const data = message.data
        console.log(data)

        const callback = callbackMap[data.MessageName]
        if (callback != undefined) {
            callback(data, ctx)
        } else {
            throw Error(`No callback set for message ${data.MessageName}`)
        }
    }

    const cbs = workerConfig.configureWorker(); 
   setActions(cbs)
}
