grammar sessions ;
protocol : (func WS func)*
    | func+ ;

func : name messageType '(' types ')' '(' continuation ')' ;

messageType : SEND*
        |  RCV*
        ;

name : ID ;

types : TYPE
        | (TYPE ',' TYPE)*;

continuation : name
        | ( name ORKW name )*
        | END ;

ORKW : '|' ;
TYPE : 'number' | 'string' | 'any' ;
SEND : '!' ;
RCV : '?' ;
ID : [a-z] CHAR | [A-Z] CHAR ;
CHAR : [a-zA-Z]+ ;
INT : [0-9]+ ;
LP: '(' ;
RP: ')' ;
LB : '{' ;
RB : '}' ;
WS: [ \t\r\n]+ -> skip ;
END : 'end' ;