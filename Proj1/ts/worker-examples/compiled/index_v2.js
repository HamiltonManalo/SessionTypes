var WorkerAbstraction2 = /** @class */ (function () {
    function WorkerAbstraction2() {
        var _this = this;
        this.results = new Array();
        this.SendFirstNumber = function (value) {
            _this.worker.postMessage(value);
            _this.worker.postMessage("+");
        };
        this.SendSecondNumber = function (value) {
            _this.worker.postMessage(value);
            _this.worker.onmessage = function (message) { return _this.results.push(message.data); };
        };
        this.SendOperation = function (symbol) { return _this.worker.postMessage(symbol); };
        this.SetDefaultResult = function () { return _this.worker.onmessage = function () { return new Error("You're out of sync!"); }; };
        this.returnResults = function () { return console.log(_this.results.pop() + _this.results.pop()); };
        this.worker = new Worker("./worker-v2.js");
    }
    return WorkerAbstraction2;
}());
var webWorker2 = new WorkerAbstraction2();
webWorker2.SendFirstNumber(1);
webWorker2.SendOperation("+");
webWorker2.SendSecondNumber(2);
setTimeout(function () {
    webWorker2.SendFirstNumber(webWorker2.results.pop());
    webWorker2.SendOperation("+");
    webWorker2.SendSecondNumber(3);
    webWorker2.returnResults();
}, 1000);
