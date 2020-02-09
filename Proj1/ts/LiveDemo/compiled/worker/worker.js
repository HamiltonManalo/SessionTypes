import { workerConfig } from '../client/WorkerExecution.js';
export var worker;
(function (worker) {
    function setActions(actions) {
        for (let propertyName in actions) {
            callbackMap[propertyName] = actions[propertyName];
        }
    }
    worker.setActions = setActions;
    const ctx = self;
    const callbackMap = {};
    // import('../WorkerExecution.js')
    console.log("worker active");
    // setActions(vals)
    ctx.onmessage = (message) => {
        const data = message.data;
        console.log(data);
        const callback = callbackMap[data.MessageName];
        if (callback != undefined) {
            callback(data, ctx);
        }
        else {
            throw Error(`No callback set for message ${data.MessageName}`);
        }
    };
    const cbs = workerConfig.configureWorker();
    setActions(cbs);
})(worker || (worker = {}));
