
grammar Calculator;
calc:   ((num|high_priority) NEWLINE)* ;
num:    num high_opr (num|high_priority)
    |   num low_opr (num|high_priority)
    |   INT
    ;
high_priority: BR_OP num BR_CL;
high_opr: (MUL|DIV);
low_opr: (PLUS|MINUS);

PLUS    : '+';
MINUS   : '-';
MUL     : '*';
DIV     : '/';
BR_OP   : '(';
BR_CL   : ')';
NEWLINE : [\r\n]+ ;
INT     : [0-9]+ ;
