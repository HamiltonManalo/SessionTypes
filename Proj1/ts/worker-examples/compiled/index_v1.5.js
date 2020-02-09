var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var WorkerAbstractionDoSubtraction = /** @class */ (function () {
    function WorkerAbstractionDoSubtraction() {
        var _this = this;
        this.results = new Array();
        this.SendFirstNumber = function (value) {
            _this.worker.postMessage(value);
        };
        this.SendSecondNumber = function (value) {
            _this.worker.postMessage(value);
            _this.worker.onmessage = function (message) { return _this.results.push(message.data); };
            return new AbstractWorkerAddition();
            {
                result: nextActions: ;
            }
        };
        //worker.sendString() => worker.sendNumber() 
        this.SetDefaultResult = function () { return _this.worker.onmessage = function () { return new Error("You're out of sync!"); }; };
        this.returnResults = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var limit = 1000;
                        var count = 0;
                        var interval = setInterval(function () {
                            count += 100;
                            if (_this.results.length == 0) {
                                clearInterval(interval);
                                resolve(_this.results.pop());
                            }
                            if (count === limit) {
                                clearInterval(interval);
                                reject(0);
                            }
                        }, 100);
                    })];
            });
        }); };
        this.worker = new Worker("./worker-v1.5.js");
    }
    return WorkerAbstractionDoSubtraction;
}());
var webWorker1 = new WorkerAbstraction();
webWorker1.SendSecondNumber(1);
webWorker1.SendFirstNumber(1);
// webWorker1.SendSecondNumber(2);
/*
 *Had an issue with commands trying to process too quickly and results being null.
 *in the first series of requests didn't have any issues, as they weren't dependent on a response. The next message using results would follow to quickly and the result would be undefined.. The same issue happened with the final result which I wrapped in a promise. This could be a solution for the first issue as well.   */
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, result;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = webWorker1).SendFirstNumber;
                return [4 /*yield*/, webWorker1.returnResults()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                webWorker1.SendSecondNumber(3);
                return [4 /*yield*/, webWorker1.returnResults()];
            case 2:
                result = _c.sent();
                console.log(result);
                return [2 /*return*/];
        }
    });
}); })();
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
