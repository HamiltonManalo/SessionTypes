import { WorkerConfiguration } from './WorkerClient.js';
import * as AsciiJob from './AsciiWorkerFile.js';
//had to change it from a push to pull configuration due to...ES6 imports? 
export var workerConfig;
(function (workerConfig) {
    workerConfig.configureWorker = () => WorkerConfiguration.HandleSendImage(AsciiJob.drawAscii).Build();
})(workerConfig || (workerConfig = {}));
