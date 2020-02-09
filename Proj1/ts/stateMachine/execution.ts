import {CommunicationStateMachine} from "./CFSM.js"; 

/***
 * Transistion through 5 states with a loop back. 
 * A -> B -> C -> B -> C -> D (end)
 */

 const start: State = {
     name: "Start", 
     transitions: [{messageType: "SEND", payload: "woo2", name: "State A"}],
     func: () => console.log("Transistion Start -> A"),
     types: [],
 }
 const A: State = {
     name: "State A",
     transitions: [{messageType: "RECEIVE", payload: "woo2", name: "State B"}],
     func: () => console.log("Transistion A -> B"),
     types: [], 
 }

 
 const B: State = {
    name: "State B",
    transitions: [{messageType: "SEND", payload: "woo2", name: "State C"}],
    func: () => console.log("Transistion B -> C"),
    types: [], 
}


const C: State = {
    name: "State C",
    transitions: [{messageType: "RECEIVE", payload: "woo2", name: "State D"},{messageType: "SEND", payload: "woo2", name:  "State B"}],
    func: () => console.log("Transistion C -> D"),
    types: [], 
}


const D: State = {
    name: "State D",
    transitions: [{messageType: "SEND", payload: "woo2", name: "End"}],
    func: () => console.log("Transistion D -> D"),
    types: [] 
}

const End: State = {
    name: "End",
    transitions: [],
    func: () => console.log("State Machine Ended"),
    types: []
}

const states = [start, A, B, C, D, End];
const CSFM = new CommunicationStateMachine(states, null); 

/*** 
 * Run States 
 */
CSFM.setStart("Start");
CSFM.transit("State A");
CSFM.transit("State B");
//Error
try {
    CSFM.transit("State A");
} catch(e) {
    console.log("ERROR!")
}
CSFM.transit("State C");
CSFM.transit("State B");
CSFM.transit("State C");
CSFM.transit("State D");
CSFM.transit("End");

