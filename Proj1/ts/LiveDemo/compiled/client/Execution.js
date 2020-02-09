import { ConfigureClient } from './Configuration.js';
import { clampDimensions, convertToGrayScales } from './AsciiConverter.js';
//This section would be exposed to users 
// client.sendImage([123, 456])
console.log('run');
//Adapted from https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html
const fileInput = document.querySelector('input[type="file"');
const canvas = document.getElementById('preview');
const context = canvas.getContext('2d');
const client = ConfigureClient
    .SetReceiveLineCallback((data) => {
    const asciiImage = document.getElementById('ascii');
    asciiImage.textContent += data.Values;
})
    .SetSendImageTransitionCallback((msg) => {
    fileInput.style.display = 'block';
})
    .Build();
fileInput.onchange = (e) => {
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
            const x = client.sendImage({
                greyScale: grayScales,
                height: height,
                width: width
            });
        };
        image.src = event.target.result;
    };
    reader.readAsDataURL(file);
};
