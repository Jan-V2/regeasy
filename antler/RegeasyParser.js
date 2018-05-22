// Generated from Regeasy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegeasyListener = require('./RegeasyListener').RegeasyListener;
var grammarFileName = "Regeasy.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001b\u009c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u00023\n\u0002",
    "\f\u0002\u000e\u00026\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0006\u0006H\n\u0006\r\u0006\u000e\u0006I\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0005\u0007P\n\u0007\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0005\bV\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000ba",
    "\n\u000b\f\u000b\u000e\u000bd\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000bm",
    "\n\u000b\r\u000b\u000e\u000bn\u0003\u000b\u0003\u000b\u0007\u000bs\n",
    "\u000b\f\u000b\u000e\u000bv\u000b\u000b\u0005\u000bx\n\u000b\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0006\f~\n\f\r\f\u000e\f\u007f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0092\n\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0002\u0002\u0018\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,\u0002\u0002",
    "\u009e\u00024\u0003\u0002\u0002\u0002\u00049\u0003\u0002\u0002\u0002",
    "\u0006=\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002\u0002\nC\u0003",
    "\u0002\u0002\u0002\fO\u0003\u0002\u0002\u0002\u000eU\u0003\u0002\u0002",
    "\u0002\u0010W\u0003\u0002\u0002\u0002\u0012Y\u0003\u0002\u0002\u0002",
    "\u0014w\u0003\u0002\u0002\u0002\u0016}\u0003\u0002\u0002\u0002\u0018",
    "\u0081\u0003\u0002\u0002\u0002\u001a\u0083\u0003\u0002\u0002\u0002\u001c",
    "\u0085\u0003\u0002\u0002\u0002\u001e\u0087\u0003\u0002\u0002\u0002 ",
    "\u0089\u0003\u0002\u0002\u0002\"\u008b\u0003\u0002\u0002\u0002$\u0091",
    "\u0003\u0002\u0002\u0002&\u0093\u0003\u0002\u0002\u0002(\u0095\u0003",
    "\u0002\u0002\u0002*\u0097\u0003\u0002\u0002\u0002,\u0099\u0003\u0002",
    "\u0002\u0002.3\u0005\u0004\u0003\u0002/3\u0005\u0006\u0004\u000203\u0005",
    "\b\u0005\u000213\u0005,\u0017\u00022.\u0003\u0002\u0002\u00022/\u0003",
    "\u0002\u0002\u000220\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u0002",
    "36\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000257\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000278\u0007\u0002",
    "\u0002\u00038\u0003\u0003\u0002\u0002\u00029:\u0007\u000f\u0002\u0002",
    ":;\u0005\f\u0007\u0002;<\u0007\f\u0002\u0002<\u0005\u0003\u0002\u0002",
    "\u0002=>\u0007\u0003\u0002\u0002>?\u0007\f\u0002\u0002?\u0007\u0003",
    "\u0002\u0002\u0002@A\u0007\u0004\u0002\u0002AB\u0007\f\u0002\u0002B",
    "\t\u0003\u0002\u0002\u0002CD\u0007\u0005\u0002\u0002DG\u0005\u000e\b",
    "\u0002EF\u0007\r\u0002\u0002FH\u0005\u000e\b\u0002GE\u0003\u0002\u0002",
    "\u0002HI\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0007\u0006\u0002\u0002L\u000b",
    "\u0003\u0002\u0002\u0002MP\u0005\n\u0006\u0002NP\u0005\u000e\b\u0002",
    "OM\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\r\u0003\u0002",
    "\u0002\u0002QV\u0005\u0010\t\u0002RV\u0005\u0012\n\u0002SV\u0005\u0014",
    "\u000b\u0002TV\u0005,\u0017\u0002UQ\u0003\u0002\u0002\u0002UR\u0003",
    "\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002",
    "V\u000f\u0003\u0002\u0002\u0002WX\u0007\n\u0002\u0002X\u0011\u0003\u0002",
    "\u0002\u0002YZ\u0007\u000b\u0002\u0002Z\u0013\u0003\u0002\u0002\u0002",
    "[\\\u0007\u0007\u0002\u0002\\]\u0005\u0012\n\u0002]^\u0007\b\u0002\u0002",
    "^x\u0003\u0002\u0002\u0002_a\u0005\u0016\f\u0002`_\u0003\u0002\u0002",
    "\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002",
    "\u0002\u0002ce\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002el\u0007",
    "\u0007\u0002\u0002fm\u0005\u0018\r\u0002gm\u0005\u001a\u000e\u0002h",
    "m\u0005\u001c\u000f\u0002im\u0005 \u0011\u0002jm\u0005\u0010\t\u0002",
    "km\u0005,\u0017\u0002lf\u0003\u0002\u0002\u0002lg\u0003\u0002\u0002",
    "\u0002lh\u0003\u0002\u0002\u0002li\u0003\u0002\u0002\u0002lj\u0003\u0002",
    "\u0002\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nl\u0003",
    "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002",
    "pt\u0007\b\u0002\u0002qs\u0005\u0016\f\u0002rq\u0003\u0002\u0002\u0002",
    "sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002w[\u0003\u0002",
    "\u0002\u0002wb\u0003\u0002\u0002\u0002x\u0015\u0003\u0002\u0002\u0002",
    "y~\u0005\u001e\u0010\u0002z~\u0005\"\u0012\u0002{~\u0005$\u0013\u0002",
    "|~\u0005,\u0017\u0002}y\u0003\u0002\u0002\u0002}z\u0003\u0002\u0002",
    "\u0002}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002~\u007f\u0003",
    "\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0017\u0003\u0002\u0002\u0002\u0081\u0082\u0007",
    "\u0014\u0002\u0002\u0082\u0019\u0003\u0002\u0002\u0002\u0083\u0084\u0007",
    "\u0015\u0002\u0002\u0084\u001b\u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "\u0016\u0002\u0002\u0086\u001d\u0003\u0002\u0002\u0002\u0087\u0088\u0007",
    "\u0017\u0002\u0002\u0088\u001f\u0003\u0002\u0002\u0002\u0089\u008a\u0007",
    "\u0018\u0002\u0002\u008a!\u0003\u0002\u0002\u0002\u008b\u008c\u0007",
    "\u0019\u0002\u0002\u008c#\u0003\u0002\u0002\u0002\u008d\u0092\u0005",
    "(\u0015\u0002\u008e\u0092\u0005*\u0016\u0002\u008f\u0092\u0005&\u0014",
    "\u0002\u0090\u0092\u0005,\u0017\u0002\u0091\u008d\u0003\u0002\u0002",
    "\u0002\u0091\u008e\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002",
    "\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092%\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0007\u000e\u0002\u0002\u0094\'\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0007\u0011\u0002\u0002\u0096)\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\u0012\u0002\u0002\u0098+\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0007\u001b\u0002\u0002\u009a-\u0003\u0002\u0002",
    "\u0002\u000f24IOUblntw}\u007f\u0091"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'group'", "'endgroup'", "'('", "')'", "'['", 
                     "']'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "ESCAPED", "STRING", "REGEX", "NL", "OR", "INT", "THEN", 
                      "THROUGH", "SOME", "ANY", "ANYTHING", "LOWERCASE", 
                      "UPPERCASE", "LETTER", "NUMBER", "WHITESPACE", "NOT", 
                      "SKIPWS", "ERRORCHAR" ];

var ruleNames =  [ "gramr", "then_block", "group", "endgroup", "branch", 
                   "block", "pattern", "string", "regex", "char_class", 
                   "char_class_meta", "lower_case", "upper_case", "letter", 
                   "number", "whitespace", "not", "amount", "inter", "some", 
                   "any", "err" ];

function RegeasyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RegeasyParser.prototype = Object.create(antlr4.Parser.prototype);
RegeasyParser.prototype.constructor = RegeasyParser;

Object.defineProperty(RegeasyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RegeasyParser.EOF = antlr4.Token.EOF;
RegeasyParser.T__0 = 1;
RegeasyParser.T__1 = 2;
RegeasyParser.T__2 = 3;
RegeasyParser.T__3 = 4;
RegeasyParser.T__4 = 5;
RegeasyParser.T__5 = 6;
RegeasyParser.ESCAPED = 7;
RegeasyParser.STRING = 8;
RegeasyParser.REGEX = 9;
RegeasyParser.NL = 10;
RegeasyParser.OR = 11;
RegeasyParser.INT = 12;
RegeasyParser.THEN = 13;
RegeasyParser.THROUGH = 14;
RegeasyParser.SOME = 15;
RegeasyParser.ANY = 16;
RegeasyParser.ANYTHING = 17;
RegeasyParser.LOWERCASE = 18;
RegeasyParser.UPPERCASE = 19;
RegeasyParser.LETTER = 20;
RegeasyParser.NUMBER = 21;
RegeasyParser.WHITESPACE = 22;
RegeasyParser.NOT = 23;
RegeasyParser.SKIPWS = 24;
RegeasyParser.ERRORCHAR = 25;

RegeasyParser.RULE_gramr = 0;
RegeasyParser.RULE_then_block = 1;
RegeasyParser.RULE_group = 2;
RegeasyParser.RULE_endgroup = 3;
RegeasyParser.RULE_branch = 4;
RegeasyParser.RULE_block = 5;
RegeasyParser.RULE_pattern = 6;
RegeasyParser.RULE_string = 7;
RegeasyParser.RULE_regex = 8;
RegeasyParser.RULE_char_class = 9;
RegeasyParser.RULE_char_class_meta = 10;
RegeasyParser.RULE_lower_case = 11;
RegeasyParser.RULE_upper_case = 12;
RegeasyParser.RULE_letter = 13;
RegeasyParser.RULE_number = 14;
RegeasyParser.RULE_whitespace = 15;
RegeasyParser.RULE_not = 16;
RegeasyParser.RULE_amount = 17;
RegeasyParser.RULE_inter = 18;
RegeasyParser.RULE_some = 19;
RegeasyParser.RULE_any = 20;
RegeasyParser.RULE_err = 21;

function GramrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_gramr;
    return this;
}

GramrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GramrContext.prototype.constructor = GramrContext;

GramrContext.prototype.EOF = function() {
    return this.getToken(RegeasyParser.EOF, 0);
};

GramrContext.prototype.then_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Then_blockContext);
    } else {
        return this.getTypedRuleContext(Then_blockContext,i);
    }
};

GramrContext.prototype.group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupContext);
    } else {
        return this.getTypedRuleContext(GroupContext,i);
    }
};

GramrContext.prototype.endgroup = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EndgroupContext);
    } else {
        return this.getTypedRuleContext(EndgroupContext,i);
    }
};

GramrContext.prototype.err = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ErrContext);
    } else {
        return this.getTypedRuleContext(ErrContext,i);
    }
};

GramrContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterGramr(this);
	}
};

GramrContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitGramr(this);
	}
};




RegeasyParser.GramrContext = GramrContext;

RegeasyParser.prototype.gramr = function() {

    var localctx = new GramrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RegeasyParser.RULE_gramr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegeasyParser.T__0) | (1 << RegeasyParser.T__1) | (1 << RegeasyParser.THEN) | (1 << RegeasyParser.ERRORCHAR))) !== 0)) {
            this.state = 48;
            switch(this._input.LA(1)) {
            case RegeasyParser.THEN:
                this.state = 44;
                this.then_block();
                break;
            case RegeasyParser.T__0:
                this.state = 45;
                this.group();
                break;
            case RegeasyParser.T__1:
                this.state = 46;
                this.endgroup();
                break;
            case RegeasyParser.ERRORCHAR:
                this.state = 47;
                this.err();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 53;
        this.match(RegeasyParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Then_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_then_block;
    return this;
}

Then_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Then_blockContext.prototype.constructor = Then_blockContext;

Then_blockContext.prototype.THEN = function() {
    return this.getToken(RegeasyParser.THEN, 0);
};

Then_blockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Then_blockContext.prototype.NL = function() {
    return this.getToken(RegeasyParser.NL, 0);
};

Then_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterThen_block(this);
	}
};

Then_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitThen_block(this);
	}
};




RegeasyParser.Then_blockContext = Then_blockContext;

RegeasyParser.prototype.then_block = function() {

    var localctx = new Then_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RegeasyParser.RULE_then_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(RegeasyParser.THEN);
        this.state = 56;
        this.block();
        this.state = 57;
        this.match(RegeasyParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.NL = function() {
    return this.getToken(RegeasyParser.NL, 0);
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitGroup(this);
	}
};




RegeasyParser.GroupContext = GroupContext;

RegeasyParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RegeasyParser.RULE_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(RegeasyParser.T__0);
        this.state = 60;
        this.match(RegeasyParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EndgroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_endgroup;
    return this;
}

EndgroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndgroupContext.prototype.constructor = EndgroupContext;

EndgroupContext.prototype.NL = function() {
    return this.getToken(RegeasyParser.NL, 0);
};

EndgroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterEndgroup(this);
	}
};

EndgroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitEndgroup(this);
	}
};




RegeasyParser.EndgroupContext = EndgroupContext;

RegeasyParser.prototype.endgroup = function() {

    var localctx = new EndgroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RegeasyParser.RULE_endgroup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(RegeasyParser.T__1);
        this.state = 63;
        this.match(RegeasyParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BranchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_branch;
    return this;
}

BranchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BranchContext.prototype.constructor = BranchContext;

BranchContext.prototype.pattern = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PatternContext);
    } else {
        return this.getTypedRuleContext(PatternContext,i);
    }
};

BranchContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RegeasyParser.OR);
    } else {
        return this.getToken(RegeasyParser.OR, i);
    }
};


BranchContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterBranch(this);
	}
};

BranchContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitBranch(this);
	}
};




RegeasyParser.BranchContext = BranchContext;

RegeasyParser.prototype.branch = function() {

    var localctx = new BranchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RegeasyParser.RULE_branch);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(RegeasyParser.T__2);
        this.state = 66;
        this.pattern();
        this.state = 69; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 67;
            this.match(RegeasyParser.OR);
            this.state = 68;
            this.pattern();
            this.state = 71; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===RegeasyParser.OR);
        this.state = 73;
        this.match(RegeasyParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.branch = function() {
    return this.getTypedRuleContext(BranchContext,0);
};

BlockContext.prototype.pattern = function() {
    return this.getTypedRuleContext(PatternContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitBlock(this);
	}
};




RegeasyParser.BlockContext = BlockContext;

RegeasyParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RegeasyParser.RULE_block);
    try {
        this.state = 77;
        switch(this._input.LA(1)) {
        case RegeasyParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.branch();
            break;
        case RegeasyParser.T__4:
        case RegeasyParser.STRING:
        case RegeasyParser.REGEX:
        case RegeasyParser.INT:
        case RegeasyParser.SOME:
        case RegeasyParser.ANY:
        case RegeasyParser.NUMBER:
        case RegeasyParser.NOT:
        case RegeasyParser.ERRORCHAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
            this.pattern();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_pattern;
    return this;
}

PatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternContext.prototype.constructor = PatternContext;

PatternContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

PatternContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};

PatternContext.prototype.char_class = function() {
    return this.getTypedRuleContext(Char_classContext,0);
};

PatternContext.prototype.err = function() {
    return this.getTypedRuleContext(ErrContext,0);
};

PatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterPattern(this);
	}
};

PatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitPattern(this);
	}
};




RegeasyParser.PatternContext = PatternContext;

RegeasyParser.prototype.pattern = function() {

    var localctx = new PatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RegeasyParser.RULE_pattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 79;
            this.string();
            break;

        case 2:
            this.state = 80;
            this.regex();
            break;

        case 3:
            this.state = 81;
            this.char_class();
            break;

        case 4:
            this.state = 82;
            this.err();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(RegeasyParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitString(this);
	}
};




RegeasyParser.StringContext = StringContext;

RegeasyParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RegeasyParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(RegeasyParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RegexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_regex;
    return this;
}

RegexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RegexContext.prototype.constructor = RegexContext;

RegexContext.prototype.REGEX = function() {
    return this.getToken(RegeasyParser.REGEX, 0);
};

RegexContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterRegex(this);
	}
};

RegexContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitRegex(this);
	}
};




RegeasyParser.RegexContext = RegexContext;

RegeasyParser.prototype.regex = function() {

    var localctx = new RegexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RegeasyParser.RULE_regex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(RegeasyParser.REGEX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Char_classContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_char_class;
    return this;
}

Char_classContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Char_classContext.prototype.constructor = Char_classContext;

Char_classContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
};

Char_classContext.prototype.char_class_meta = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Char_class_metaContext);
    } else {
        return this.getTypedRuleContext(Char_class_metaContext,i);
    }
};

Char_classContext.prototype.lower_case = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Lower_caseContext);
    } else {
        return this.getTypedRuleContext(Lower_caseContext,i);
    }
};

Char_classContext.prototype.upper_case = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Upper_caseContext);
    } else {
        return this.getTypedRuleContext(Upper_caseContext,i);
    }
};

Char_classContext.prototype.letter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LetterContext);
    } else {
        return this.getTypedRuleContext(LetterContext,i);
    }
};

Char_classContext.prototype.whitespace = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WhitespaceContext);
    } else {
        return this.getTypedRuleContext(WhitespaceContext,i);
    }
};

Char_classContext.prototype.string = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext,i);
    }
};

Char_classContext.prototype.err = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ErrContext);
    } else {
        return this.getTypedRuleContext(ErrContext,i);
    }
};

Char_classContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterChar_class(this);
	}
};

Char_classContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitChar_class(this);
	}
};




RegeasyParser.Char_classContext = Char_classContext;

RegeasyParser.prototype.char_class = function() {

    var localctx = new Char_classContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RegeasyParser.RULE_char_class);
    var _la = 0; // Token type
    try {
        this.state = 117;
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 89;
            this.match(RegeasyParser.T__4);
            this.state = 90;
            this.regex();
            this.state = 91;
            this.match(RegeasyParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegeasyParser.INT) | (1 << RegeasyParser.SOME) | (1 << RegeasyParser.ANY) | (1 << RegeasyParser.NUMBER) | (1 << RegeasyParser.NOT) | (1 << RegeasyParser.ERRORCHAR))) !== 0)) {
                this.state = 93;
                this.char_class_meta();
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 99;
            this.match(RegeasyParser.T__4);
            this.state = 106; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 106;
                switch(this._input.LA(1)) {
                case RegeasyParser.LOWERCASE:
                    this.state = 100;
                    this.lower_case();
                    break;
                case RegeasyParser.UPPERCASE:
                    this.state = 101;
                    this.upper_case();
                    break;
                case RegeasyParser.LETTER:
                    this.state = 102;
                    this.letter();
                    break;
                case RegeasyParser.WHITESPACE:
                    this.state = 103;
                    this.whitespace();
                    break;
                case RegeasyParser.STRING:
                    this.state = 104;
                    this.string();
                    break;
                case RegeasyParser.ERRORCHAR:
                    this.state = 105;
                    this.err();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 108; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegeasyParser.STRING) | (1 << RegeasyParser.LOWERCASE) | (1 << RegeasyParser.UPPERCASE) | (1 << RegeasyParser.LETTER) | (1 << RegeasyParser.WHITESPACE) | (1 << RegeasyParser.ERRORCHAR))) !== 0));
            this.state = 110;
            this.match(RegeasyParser.T__5);
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegeasyParser.INT) | (1 << RegeasyParser.SOME) | (1 << RegeasyParser.ANY) | (1 << RegeasyParser.NUMBER) | (1 << RegeasyParser.NOT) | (1 << RegeasyParser.ERRORCHAR))) !== 0)) {
                this.state = 111;
                this.char_class_meta();
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Char_class_metaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_char_class_meta;
    return this;
}

Char_class_metaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Char_class_metaContext.prototype.constructor = Char_class_metaContext;

Char_class_metaContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

Char_class_metaContext.prototype.not = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NotContext);
    } else {
        return this.getTypedRuleContext(NotContext,i);
    }
};

Char_class_metaContext.prototype.amount = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AmountContext);
    } else {
        return this.getTypedRuleContext(AmountContext,i);
    }
};

Char_class_metaContext.prototype.err = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ErrContext);
    } else {
        return this.getTypedRuleContext(ErrContext,i);
    }
};

Char_class_metaContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterChar_class_meta(this);
	}
};

Char_class_metaContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitChar_class_meta(this);
	}
};




RegeasyParser.Char_class_metaContext = Char_class_metaContext;

RegeasyParser.prototype.char_class_meta = function() {

    var localctx = new Char_class_metaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RegeasyParser.RULE_char_class_meta);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 123;
        		var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        		switch(la_) {
        		case 1:
        		    this.state = 119;
        		    this.number();
        		    break;

        		case 2:
        		    this.state = 120;
        		    this.not();
        		    break;

        		case 3:
        		    this.state = 121;
        		    this.amount();
        		    break;

        		case 4:
        		    this.state = 122;
        		    this.err();
        		    break;

        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 125; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Lower_caseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_lower_case;
    return this;
}

Lower_caseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Lower_caseContext.prototype.constructor = Lower_caseContext;

Lower_caseContext.prototype.LOWERCASE = function() {
    return this.getToken(RegeasyParser.LOWERCASE, 0);
};

Lower_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterLower_case(this);
	}
};

Lower_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitLower_case(this);
	}
};




RegeasyParser.Lower_caseContext = Lower_caseContext;

RegeasyParser.prototype.lower_case = function() {

    var localctx = new Lower_caseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RegeasyParser.RULE_lower_case);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(RegeasyParser.LOWERCASE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Upper_caseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_upper_case;
    return this;
}

Upper_caseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Upper_caseContext.prototype.constructor = Upper_caseContext;

Upper_caseContext.prototype.UPPERCASE = function() {
    return this.getToken(RegeasyParser.UPPERCASE, 0);
};

Upper_caseContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterUpper_case(this);
	}
};

Upper_caseContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitUpper_case(this);
	}
};




RegeasyParser.Upper_caseContext = Upper_caseContext;

RegeasyParser.prototype.upper_case = function() {

    var localctx = new Upper_caseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, RegeasyParser.RULE_upper_case);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(RegeasyParser.UPPERCASE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_letter;
    return this;
}

LetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetterContext.prototype.constructor = LetterContext;

LetterContext.prototype.LETTER = function() {
    return this.getToken(RegeasyParser.LETTER, 0);
};

LetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterLetter(this);
	}
};

LetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitLetter(this);
	}
};




RegeasyParser.LetterContext = LetterContext;

RegeasyParser.prototype.letter = function() {

    var localctx = new LetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, RegeasyParser.RULE_letter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(RegeasyParser.LETTER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(RegeasyParser.NUMBER, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitNumber(this);
	}
};




RegeasyParser.NumberContext = NumberContext;

RegeasyParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, RegeasyParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(RegeasyParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhitespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_whitespace;
    return this;
}

WhitespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhitespaceContext.prototype.constructor = WhitespaceContext;

WhitespaceContext.prototype.WHITESPACE = function() {
    return this.getToken(RegeasyParser.WHITESPACE, 0);
};

WhitespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterWhitespace(this);
	}
};

WhitespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitWhitespace(this);
	}
};




RegeasyParser.WhitespaceContext = WhitespaceContext;

RegeasyParser.prototype.whitespace = function() {

    var localctx = new WhitespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, RegeasyParser.RULE_whitespace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(RegeasyParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NotContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_not;
    return this;
}

NotContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotContext.prototype.constructor = NotContext;

NotContext.prototype.NOT = function() {
    return this.getToken(RegeasyParser.NOT, 0);
};

NotContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterNot(this);
	}
};

NotContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitNot(this);
	}
};




RegeasyParser.NotContext = NotContext;

RegeasyParser.prototype.not = function() {

    var localctx = new NotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, RegeasyParser.RULE_not);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(RegeasyParser.NOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AmountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_amount;
    return this;
}

AmountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AmountContext.prototype.constructor = AmountContext;

AmountContext.prototype.some = function() {
    return this.getTypedRuleContext(SomeContext,0);
};

AmountContext.prototype.any = function() {
    return this.getTypedRuleContext(AnyContext,0);
};

AmountContext.prototype.inter = function() {
    return this.getTypedRuleContext(InterContext,0);
};

AmountContext.prototype.err = function() {
    return this.getTypedRuleContext(ErrContext,0);
};

AmountContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterAmount(this);
	}
};

AmountContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitAmount(this);
	}
};




RegeasyParser.AmountContext = AmountContext;

RegeasyParser.prototype.amount = function() {

    var localctx = new AmountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, RegeasyParser.RULE_amount);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        switch(this._input.LA(1)) {
        case RegeasyParser.SOME:
            this.state = 139;
            this.some();
            break;
        case RegeasyParser.ANY:
            this.state = 140;
            this.any();
            break;
        case RegeasyParser.INT:
            this.state = 141;
            this.inter();
            break;
        case RegeasyParser.ERRORCHAR:
            this.state = 142;
            this.err();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_inter;
    return this;
}

InterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InterContext.prototype.constructor = InterContext;

InterContext.prototype.INT = function() {
    return this.getToken(RegeasyParser.INT, 0);
};

InterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterInter(this);
	}
};

InterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitInter(this);
	}
};




RegeasyParser.InterContext = InterContext;

RegeasyParser.prototype.inter = function() {

    var localctx = new InterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, RegeasyParser.RULE_inter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(RegeasyParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SomeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_some;
    return this;
}

SomeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SomeContext.prototype.constructor = SomeContext;

SomeContext.prototype.SOME = function() {
    return this.getToken(RegeasyParser.SOME, 0);
};

SomeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterSome(this);
	}
};

SomeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitSome(this);
	}
};




RegeasyParser.SomeContext = SomeContext;

RegeasyParser.prototype.some = function() {

    var localctx = new SomeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, RegeasyParser.RULE_some);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(RegeasyParser.SOME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_any;
    return this;
}

AnyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnyContext.prototype.constructor = AnyContext;

AnyContext.prototype.ANY = function() {
    return this.getToken(RegeasyParser.ANY, 0);
};

AnyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterAny(this);
	}
};

AnyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitAny(this);
	}
};




RegeasyParser.AnyContext = AnyContext;

RegeasyParser.prototype.any = function() {

    var localctx = new AnyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, RegeasyParser.RULE_any);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(RegeasyParser.ANY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ErrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_err;
    return this;
}

ErrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ErrContext.prototype.constructor = ErrContext;

ErrContext.prototype.ERRORCHAR = function() {
    return this.getToken(RegeasyParser.ERRORCHAR, 0);
};

ErrContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterErr(this);
	}
};

ErrContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitErr(this);
	}
};




RegeasyParser.ErrContext = ErrContext;

RegeasyParser.prototype.err = function() {

    var localctx = new ErrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, RegeasyParser.RULE_err);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(RegeasyParser.ERRORCHAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RegeasyParser = RegeasyParser;
