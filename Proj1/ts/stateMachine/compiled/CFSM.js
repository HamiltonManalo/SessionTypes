export class CommunicationStateMachine {
    //The states are generated by Antlr4 and fed in as an argument that populates the FSM
    //The path would than be the generated worker file?
    constructor(states, webWorkerPath = null) {
        this.map = {};
        this.setStart = (start) => this._currentState = start;
        this.transit = (nextState) => {
            if (this.map[nextState] == null)
                throw new Error("aint no state here, bub");
            const state = this.map[this._currentState];
            if (state.transitions.find(transition => transition.name == nextState) != undefined) {
                const newState = this.map[nextState];
                this._currentState = newState.name;
                //This is where i think i need a data-flow diagram. 
                //how would this action be related to the users desired outcome? 
                //example: if its an incoming message, would this be a reactive configuration
                //the worker pushes a message and the main thread responds?
                //and in the case of an Main -> Worker message would the new action need to be added to the next state and than fired off? 
                //But in this format incoming messages will be handled by callback 
                //and branching needs to be considered 
                if (this.worker != null)
                    newState.action.call(null, this.worker);
                else
                    newState.action.call(null);
            }
            else {
                throw new Error("Not a valid transistion");
            }
        };
        states.forEach(x => this.map[x.name] = x);
        this.worker = webWorkerPath != null ? new Worker(webWorkerPath) : null;
    }
}