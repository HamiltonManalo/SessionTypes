namespace worker2 {
    const ctx: Worker = self as any;
    const funcs = []
    const numbers: Array<number> = []
    const symbols: Array<string> = []
    const t = {
        "+": null,
        "-": null,
        "\\": null, 
        "/": null,
        "*": null
    }
    //conditionals everywhere! 
    ctx.onmessage = (message: MessageEvent) => {
        const data = message.data; 
        let result: number = null;

        if(isNumber(data))
            numbers.push(data)
        else if(Object.getOwnPropertyNames(t).indexOf(data) >= 0)
            symbols.push(data) 
            

        if(numbers.length > 1 && symbols.length > 0)
            result = processAction(numbers, symbols)

        if(result !== null)
            ctx.postMessage(result)
    } 

    const processAction = (values: Array<number>, symbols: Array<string>) => t[symbols.pop()](values)

    const add = (values: Array<number>) => values.pop() + values.pop() 

    const isNumber = (value: string) => !isNaN(Number(value))
    t["+"] = add
}
