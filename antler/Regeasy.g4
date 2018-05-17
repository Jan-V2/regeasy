
grammar Regeasy;
gramr      : (then_block|group|endgroup)* EOF;
then_block : THEN block NL;
group      : 'group' NL;
endgroup   : 'endgroup' NL;
block      : branch
           | string
           | regex
           ;
branch     : '(' string (OR string)+ ')';//should this be called branch
string     : STRING;
regex      : REGEX;
char_class : '['']';


STRING  : ('\''|'"').*?('\''|'"');
REGEX   : '/'.+?'/';
SKIP_WS : ([ \t]+) -> skip ;
NL      : [\r\n]+;
OR      : ('|'|'or');
INT     : [0-9]+ ;
THEN    : ('then'|'first');
THROUGH : ('-'|'through');
SOME    : ('+'|'some');
ANY     : ('*'|'any');