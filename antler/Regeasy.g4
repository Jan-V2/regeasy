
grammar Regeasy;
gramr      : then_block;
group      : GROUP_OPEN then_block GROUP_CLOSE;
then_block:  group
           | THEN block (THEN|then_block|EOF);
block      : STRING;


SKIP_WS : ([ \t]+|[\r\n]+) -> skip ;
STRING  :('\''|'"').*?('\''|'"');
PLUS    : '+';
MINUS   : '-';
MUL     : '*';
DIV     : '/';
BR_OP   : '(';
BR_CL   : ')';
INT     : [0-9]+ ;
THEN    :('then'|'first');
GROUP_CLOSE:'end';
GROUP_OPEN:'group';




