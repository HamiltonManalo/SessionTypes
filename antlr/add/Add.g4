grammar Add ; 
func : name '('messageType types* ')' '(' CONT ')' ;
messageType : SEND* 
        |  RCV* 
        ;
name : ID ;
types : TYPE ;
CONT : 'cont' ;  
TYPE : 'int' | 'string' | 'any' ;
SEND : '!' ;
RCV : '?' ;
ID : [a-z] CHAR | [A-Z] CHAR ;
CHAR : [a-z]+ ; 
INT : [0-9]+ ; 
LP: '(' ;
RP: ')' ;
LB : '{' ; 
RB : '}' ;
WS: [ \t\r\n]+ -> skip ; 
