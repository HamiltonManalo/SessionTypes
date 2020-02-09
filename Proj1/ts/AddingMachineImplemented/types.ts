type validNames = "sendAdd" | "receiveAdd" | "sendSubtract" | "receiveSubtract"

export interface Message {
    messageName: validNames
}


export interface AddMessage extends Message {
    addValue1: number
    addValue2: number
}
export interface SubtractMessage extends Message {
    subtractValue1: number
    subtractValue2: number
}
export interface ReceiveAddMessage extends AddMessage {}

export interface ReceiveAddResponse extends Message {
    addedValue: number
}
export interface ReceiveSubtractMessage extends SubtractMessage{

}
export interface SendAddResponse extends ReceiveAddResponse {}

export interface Add {
    sendAdd: (number1: number, number2: number)  => {

    }
}