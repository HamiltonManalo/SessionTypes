import {WorkerConfiguration} from '../worker/WorkerClient.js'
import * as AsciiJob from './AsciiWorkerFile.js'


//had to change it from a push to pull configuration due to...ES6 imports? 
export module workerConfig {
    export const configureWorker =() => WorkerConfiguration.HandleSendImage(AsciiJob.drawAscii).Build()
}