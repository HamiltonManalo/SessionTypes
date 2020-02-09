import { CommunicationStateMachine } from './CFSM.js';
/***
 * Transistion through 5 states with a loop back.
 * A -> B -> C -> B -> C -> D (end)
 */
const start = {
    name: "Start",
    transitions: [{ action: 'woo', payload: 'woo2', name: "State A" }],
    action: () => console.log("Transistion Start -> A"),
    args: "",
};
const A = {
    name: "State A",
    transitions: [{ action: "woo a", payload: 'woo2', name: "State B" }],
    action: () => console.log("Transistion A -> B"),
    args: "",
};
const B = {
    name: "State B",
    transitions: [{ action: "woo a", payload: 'woo2', name: "State C" }],
    action: () => console.log("Transistion B -> C"),
    args: "",
};
const C = {
    name: "State C",
    transitions: [{ action: "woo a", payload: 'woo2', name: "State D" }, { action: "woo a", payload: 'woo2', name: "State B" }],
    action: () => console.log("Transistion C -> D"),
    args: "",
};
const D = {
    name: "State D",
    transitions: [{ action: "woo a", payload: 'woo2', name: "End" }],
    action: () => console.log("Transistion D -> D"),
    args: "",
};
const End = {
    name: "End",
    transitions: [],
    action: () => console.log("State Machine Ended"),
    args: "",
};
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
}
catch (e) {
    console.log("ERROR!");
}
CSFM.transit("State C");
CSFM.transit("State B");
CSFM.transit("State C");
CSFM.transit("State D");
CSFM.transit("End");
