class WorkerAbstractionDoSubtraction {
    worker: Worker 
    results: Array<number> = new Array<number>() 

    constructor() {
        this.worker = new Worker("./worker-v1.5.js")
    }
    SendFirstNumber = (value: number) => {
        this.worker.postMessage(value); 
    }

    SendSecondNumber = (value: number) => {
        this.worker.postMessage(value)
        this.worker.onmessage = (message: MessageEvent) => this.results.push(message.data)
        return new AbstractWorkerAddition() {
            result: 
            nextActions: 
        }
    }

    //worker.sendString() => worker.sendNumber() 
    private SetDefaultResult = () => this.worker.onmessage = () => new Error("You're out of sync!")
    returnResults = async () => new Promise<number>((resolve, reject) => {
        const limit = 1000
        let count = 0; 
        const interval = setInterval(() => 
        {
            count += 100 
            if(this.results.length == 0) {
                clearInterval(interval)
                resolve(this.results.pop())
            } if(count === limit) {
                clearInterval(interval)
                reject(0)
            }

        }, 100)
        
    })
    
}
const webWorker1 = new WorkerAbstraction() 
webWorker1.SendSecondNumber(1);
webWorker1.SendFirstNumber(1);
// webWorker1.SendSecondNumber(2);
/*
 *Had an issue with commands trying to process too quickly and results being null.
 *in the first series of requests didn't have any issues, as they weren't dependent on a response. The next message using results would follow to quickly and the result would be undefined.. The same issue happened with the final result which I wrapped in a promise. This could be a solution for the first issue as well.   */

(async () => {
    webWorker1.SendFirstNumber( await webWorker1.returnResults())
    webWorker1.SendSecondNumber(3)
    const result = await webWorker1.returnResults()
    console.log(result)
})()
//let worker = new WorkerAbstraction(); 
//worker = worker.DoAddition(); => worker.doSubtraction() | result
//work. -> result | doSubtraction() 
// //worker.buildAction(doAddition, (typeHere) => logic ) <---library reads tree and sends data to worker which rebuilds logic from json
// let functions = {}
// functions[name] = Function(...args, logic)
// 

//workerBuilder = new worker() 
//worker = workerBuilder.StartSession() 
//worker = worker.Dosomething() <--internally locked last workerstate 
//worker.dosomething() 


//worker.DoThing1()
//worker.DoThing2()
//worker = worker.DoThing1();
