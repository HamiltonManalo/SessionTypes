import {start } from "./client/ClientApiClass"

const configure = start()
//I feel like I'm falling a bit into a bit of C# because the scope could get flooded with configuration
//right now it looks simple because all I'm doing is feeding a value to console log. 
//if I wanted to be perform complex actions there would be a lot more code 
//might be an idea to pass it through configuration functions which can encapsulate the more complex 
//responses for callbacks 
//function cb(value: number) {
//document.queryselector('#id').setInnerHtml(`<p> your result is {value} <p>`)    
//}
//let session = configure.setReceiveCallback(cb).getSession()
//That could even be extended to use a closure to give it access to variables in a private scope 
//e.g. 
//function cbClosure() {
// const element = document.getElementById("id")
//return function cb(value: number) {
//      element.setInnerHtml...    
//  }
//}
//but looking at all the configuration code I've had to make, generating it seems like it could get tricky. 
//note to self - look at the relationship between the types, configuration functions and 
let session = configure.setAddReceiveCallback((a) => console.log(a)).setReceiveSubtractCallback((b) => console.log(b)).getSession()

session = session.sendAdd(1, 2)
session.end()
/* OR */
let session1 = configure.setAddReceiveCallback((value) => console.log(value)).getSession()
configure.setAddReceiveCallback((number) => console.log(number))
const continuation = session1.sendAdd(1, 2); 

continuation.end()
