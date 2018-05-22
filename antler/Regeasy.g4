
grammar Regeasy;
gramr      : (then_block|group|endgroup|err)* EOF;
then_block : THEN block NL;
group      : 'group' NL;
endgroup   : 'endgroup' NL;
branch     : '(' pattern (OR pattern)+ ')';//should this be called branch
block      : branch
           | pattern
           ;
pattern    : (string|regex|char_class|err);
string     : STRING;
regex      : REGEX;
char_class : '[' regex ']'
           | char_class_meta* '[' (lower_case|upper_case|letter|whitespace|string|err)+ ']' char_class_meta*
           ;
char_class_meta : (number|not|amount|err)+ ;
lower_case : LOWERCASE;
upper_case : UPPERCASE;
letter     : LETTER;
number     : NUMBER;
whitespace : WHITESPACE;
not        : NOT;

amount     : (some|any|inter|err);
inter      : INT;
some       : SOME;
any        : ANY;
err        : ERRORCHAR;

ESCAPED : '\\' ('\\'|'/'|'\''|'"'|'*'|'?'|'!'|'|'|'+'|'['|']'|'('|')');
STRING  : ('\''|'"').*?('\''|'"');
REGEX   : '/'.+?'/';
NL      : [\r\n]+;
OR      : ('|'|'or');
INT     : [0-9]+ ;
THEN    : ('then'|'first');
THROUGH : ('-'|'through');


// char class
SOME      : ('+'|'some'|'one or more');
ANY       : ('*'|'any'| 'any number of'|'any amount of');
ANYTHING  : ('anything');
LOWERCASE : ('lowercase'|'lower');
UPPERCASE : ('upper'|'uppercase');
LETTER    : ('let'|'letter'|'letters');
NUMBER    : ('num'|'nums'|'numbers');
WHITESPACE: ('whitespace'|'whitespaces'|'space');
NOT       : ('not');

SKIPWS : ([ \t]+) -> skip ;
ERRORCHAR : . ;
