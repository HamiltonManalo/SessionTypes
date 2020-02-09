var ctx = self;
// ctx.postMessage();
// export {} 
var batch = 0;
var rnd = 0;
var deadlock = false;
var maxBatch = 10;
ctx.onmessage = function (message) {
    // ctx.postMessage(`message echo -> ${message.data.message} for ${message.data.timer}`)
    if (message.data.message === 'stop') {
        batch = 0;
        deadlock = false;
        rnd = 0;
    }
    else if (message.data.message === "do work" && message.data.deadlock && batch < maxBatch) {
        batch++;
        message.data.func();
        setTimeout(function () { return ctx.postMessage({ message: "Work done!", batch: batch }); }, 500);
    }
    else if (batch === 0) {
        setTimeout(function () { return ctx.postMessage({ message: "Work done!" }); }, 500);
    }
    else if (batch >= maxBatch) {
        ctx.postMessage({ message: 'Entering deadlock AKA consider this message as never sent', deadlocked: true });
    }
    else {
    }
};
{
    if (deadlock) {
        rnd = Math.random();
    }
}
// setInterval(() => ctx.postMessage("hello!"), 500); 
console.log('reached');
/*
worker.ProcessData returns subtype that only has valid communication options
{
    onErrorMessage: **
    onSuccessMessage: **
    nextValidMessage1: **
    nextValidMessageN: **
}
worker.Configuration()
    .SetMessage((string) => number, (number) => string)
    .andThen(n)
    .NextSeries()
    !int.P
*/ 
