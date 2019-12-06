type StateName = 
	  "add"
	| "displayValue"
 let transitions = [
	{ messageType: "RECEIVE" },{ payload: "" },{ stateName: "add" },
	{ messageType: "SEND" },{ payload: "" },{ stateName: "displayValue" },
	{ messageType: "NONE" },{ payload: "" },{ stateName: "END" }
	]
type MessageTypes = 	"SEND"
|	"RECEIVE"
|	"NONE"


let states = [
{
	stateName: "add", 
	transitions:[{ messageType: "SEND" },{ payload: "" },{ stateName: "displayValue" }, { messageType: "NONE" },{ payload: "" },{ stateName: "END" }],
	func:"",
	types: ["number", "number"]
},
	
{
	stateName: "displayValue", 
	transitions:[{ messageType: "NONE" },{ payload: "" },{ stateName: "END" }],
	func:"",
	types: ["number"]
}]