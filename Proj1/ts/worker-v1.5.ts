namespace worker {
    const ctx: Worker = self as any;
    const numbers: Array<number> = []
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

        if(numbers.length > 1)
            result = processAction(numbers)

        if(result !== null)
            ctx.postMessage(result)
    } 
    
//!int.!int.?int
/* 
    type message = {
        value: number, 
        state: string
    }    
*/
    type init = [number, number]
    const processAction = (values: Array<number>) => add(values)

    const add = (values: Array<number>) => values.pop() + values.pop() 

    const isNumber = (value: string) => !isNaN(Number(value))
}
