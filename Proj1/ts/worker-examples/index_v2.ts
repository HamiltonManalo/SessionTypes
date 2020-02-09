class WorkerAbstraction2 {
    worker: Worker 
    results: Array<number> = new Array<number>() 

    constructor() {
        this.worker = new Worker("./worker-v2.js")
    }
    SendFirstNumber = (value: number) => {
        this.worker.postMessage(value); 
        this.worker.postMessage("+");
    }

    SendSecondNumber = (value: number) => {
        this.worker.postMessage(value)
        this.worker.onmessage = (message: MessageEvent) => this.results.push(message.data)
    }
    SendOperation = (symbol: string) => this.worker.postMessage(symbol)
    private SetDefaultResult = () => this.worker.onmessage = () => new Error("You're out of sync!")
    returnResults = () => console.log(this.results.pop() + this.results.pop())
}
const webWorker2 = new WorkerAbstraction2() 
webWorker2.SendFirstNumber(1)
webWorker2.SendOperation("+")
webWorker2.SendSecondNumber(2)
setTimeout(() => {
    webWorker2.SendFirstNumber(webWorker2.results.pop())
    webWorker2.SendOperation("+")
    webWorker2.SendSecondNumber(3)
    webWorker2.returnResults()
}, 1000)
