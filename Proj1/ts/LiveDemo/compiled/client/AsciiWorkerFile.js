export const drawAscii = (msg, ctx) => {
    //modified from original to process chunks and send them to client. 
    var pause = 100;
    const grayScales = msg.Image.greyScale;
    const width = msg.Image.width;
    for (let i = 0; i < grayScales.length; i += width) {
        setTimeout(() => {
            const chunk = grayScales.slice(i, i + width);
            const ascii = chunk.reduce((asciiImage, chunk, index) => {
                let nextChars = getCharacterForGrayScale(chunk);
                if ((index + 1) % width === 0) {
                    nextChars += '\n';
                }
                return asciiImage + nextChars;
            }, '');
            ctx.postMessage({
                MessageName: 'ReceivingLines',
                Values: ascii,
                Line: 0
            });
            console.log(pause);
        }, pause);
        pause < 15000 ? pause += 150 : pause = pause;
        const completedMessage = {
            MessageName: 'ImageConverted',
            successful: true
        };
        ctx.postMessage(completedMessage);
    }
};
const getCharacterForGrayScale = grayScale => grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];
const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
const rampLength = grayRamp.length;
