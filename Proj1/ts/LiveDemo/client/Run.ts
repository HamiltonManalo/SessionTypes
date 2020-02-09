import {ConfigureClient } from './Configuration.js'
import { HTMLInputEvent, SendImageMessage, ReceiveRowMessage, ReceiveCompleteMessage } from './types.js';
import {clampDimensions, convertToGrayScales } from './AsciiConverter.js'
//This section would be exposed to users 


// client.sendImage([123, 456])
console.log('run')


//Adapted from https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html

const fileInput = document.querySelector('input[type="file"') as HTMLInputElement;
const canvas = document.getElementById('preview') as HTMLCanvasElement;
const context = canvas.getContext('2d');


const client = ConfigureClient
                        .SetReceiveLineCallback((data: ReceiveRowMessage) => {
                            const asciiImage = document.getElementById('ascii');
                            asciiImage.textContent+= data.Values})
                        .SetSendImageTransitionCallback((msg: ReceiveCompleteMessage) => {
                            fileInput.style.display = 'block'})
                        .Build() 


fileInput.onchange = (e: HTMLInputEvent) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
            const [width, height] = clampDimensions(image.width, image.height);

            canvas.width = width;
            canvas.height = height;

            context.drawImage(image, 0, 0, width, height);
            const grayScales = convertToGrayScales(context, width, height);

            fileInput.style.display = 'none';
            //drawAscii(grayScales, width);
            //replace with call to worker
           const x =  client.sendImage({
                greyScale: grayScales,
                height: height,
                width: width
            } as SendImageMessage)
        }

        image.src = event.target.result as string;
    };

    reader.readAsDataURL(file);
};
