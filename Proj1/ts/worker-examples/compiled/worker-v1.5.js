var worker;
(function (worker) {
    var ctx = self;
    var numbers = [];
    var t = {
        "+": null,
        "-": null,
        "\\": null,
        "/": null,
        "*": null
    };
    //conditionals everywhere! 
    ctx.onmessage = function (message) {
        var data = message.data;
        var result = null;
        if (isNumber(data))
            numbers.push(data);
        if (numbers.length > 1)
            result = processAction(numbers);
        if (result !== null)
            ctx.postMessage(result);
    };
    var processAction = function (values) { return add(values); };
    var add = function (values) { return values.pop() + values.pop(); };
    var isNumber = function (value) { return !isNaN(Number(value)); };
})(worker || (worker = {}));
