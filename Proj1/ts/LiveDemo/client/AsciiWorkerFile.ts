import { SendRowMessage, SendImageMessage, SendCompleteMessage } from "./types";

export const drawAscii = (msg: SendImageMessage, ctx: Worker) => {
    //modified from original to process chunks and send them to client. 
    var pause = 100
    const grayScales: number[] = msg.Image.greyScale
    const width: number = msg.Image.width
    for(let i = 0; i < grayScales.length; i += width) {
        setTimeout(() => {
            const chunk = grayScales.slice(i, i+width)
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
            } as SendRowMessage)
           
            console.log(pause)
        },pause)
        pause < 15000 ? pause += 150 : pause = pause
        const completedMessage: SendCompleteMessage = {
            MessageName: 'ImageConverted',
            successful: true
        }
        ctx.postMessage(completedMessage)
    }
};
const getCharacterForGrayScale = grayScale => grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];

const grayRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'. ';
const rampLength = grayRamp.length;