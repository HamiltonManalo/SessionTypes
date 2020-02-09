var webWorker = new Worker('./worker.js');
var halt = false;
// worker.onmessage = (message: any) => document.querySelector("#output").innerHTML += "<br/><br/>" + message.data; 
function startWithoutDeadlock() {
    reset();
    var element = document.querySelector("#output");
    element.innerHTML += "<br/><br/> Sending work";
    webWorker.postMessage({ message: 'do work', deadlock: false });
    webWorker.onmessage = function (message) {
        if (!halt) {
            console.log("halt = " + halt);
            element.innerHTML += "<br/><br/> received work, message: " + message.data.message;
            setTimeout(function () { return webWorker.postMessage({ message: 'do work', deadlock: false }); }, 500);
        }
        else if (halt) {
        }
    };
}
function startWithDeadlock() {
    reset();
    var element = document.querySelector("#output");
    webWorker.postMessage({ message: 'do work', deadlock: true, func: function () { return console.log("func"); } });
    element.innerHTML += "<br/><br/> Sending work";
    webWorker.onmessage = function (message) {
        if (!message.data.deadlocked && !halt) {
            element.innerHTML += message.data.deadlocked ? "<br/> <br/> Deadlocked" : "<br/><br/> received work, message: " + message.data.message + ", blocking after 10. current Batch: " + message.data.batch;
            element.innerHTML += "<br/><br/> Sending work";
            var x = function () { return console.log("func"); };
            setTimeout(function () { return webWorker.postMessage({ message: 'do work', deadlock: true }); }, 500);
        }
        else if (halt) {
            webWorker.postMessage({ message: "stop" });
        }
        else if (message.data.deadlocked) {
        }
    };
}
function stop() {
    halt = true;
    webWorker.postMessage({ message: 'stop' });
    document.querySelector("#output").innerHTML += "<br/><br/> stopping work now...";
}
function reset() {
    halt = false;
}
var clear = function () { return document.querySelector("#output").innerHTML = ""; };
