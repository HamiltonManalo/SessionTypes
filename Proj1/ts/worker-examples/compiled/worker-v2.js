var worker2;
(function (worker2) {
    var ctx = self;
    var funcs = [];
    var numbers = [];
    var symbols = [];
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
        else if (Object.getOwnPropertyNames(t).indexOf(data) >= 0)
            symbols.push(data);
        if (numbers.length > 1 && symbols.length > 0)
            result = processAction(numbers, symbols);
        if (result !== null)
            ctx.postMessage(result);
    };
    var processAction = function (values, symbols) { return t[symbols.pop()](values); };
    var add = function (values) { return values.pop() + values.pop(); };
    var isNumber = function (value) { return !isNaN(Number(value)); };
    t["+"] = add;
})(worker2 || (worker2 = {}));
