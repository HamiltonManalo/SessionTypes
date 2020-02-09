
//generate transition type 
interface transition { 
    messageType: messageType,
    payload: any,
    name: stateName
} 
interface StateA {
    name: "State A"
}

 
interface StateB {
    name: "State B"
}

type IStateName = 
     StateA
    | StateB

type stateName = 
        "State A" 
    |   "State B"
    |   "State C"
    |   "State D"
    |   "Start"
    |   "End"

type messageType = 
        "SEND"
    |   "RECEIVE"

// interface type {
//     string | number 
// }

interface State {
    name: stateName, 
    transitions: transition[], //Could generate enums for transistions 
    func: (args: any) => any
    types: Array<string> //Types and order of arguments 
}
