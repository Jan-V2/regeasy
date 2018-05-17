// Generated from Regeasy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegeasyListener = require('./RegeasyListener').RegeasyListener;
var grammarFileName = "Regeasy.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0012?\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006,\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0006\u00072\n\u0007\r\u0007\u000e\u00073\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0002\u0002;\u0002\u0019\u0003\u0002\u0002\u0002\u0004\u001e\u0003",
    "\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002",
    "\u0002\n+\u0003\u0002\u0002\u0002\f-\u0003\u0002\u0002\u0002\u000e7",
    "\u0003\u0002\u0002\u0002\u00109\u0003\u0002\u0002\u0002\u0012;\u0003",
    "\u0002\u0002\u0002\u0014\u0018\u0005\u0004\u0003\u0002\u0015\u0018\u0005",
    "\u0006\u0004\u0002\u0016\u0018\u0005\b\u0005\u0002\u0017\u0014\u0003",
    "\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\u0007",
    "\u0002\u0002\u0003\u001d\u0003\u0003\u0002\u0002\u0002\u001e\u001f\u0007",
    "\u000f\u0002\u0002\u001f \u0005\n\u0006\u0002 !\u0007\f\u0002\u0002",
    "!\u0005\u0003\u0002\u0002\u0002\"#\u0007\u0003\u0002\u0002#$\u0007\f",
    "\u0002\u0002$\u0007\u0003\u0002\u0002\u0002%&\u0007\u0004\u0002\u0002",
    "&\'\u0007\f\u0002\u0002\'\t\u0003\u0002\u0002\u0002(,\u0005\f\u0007",
    "\u0002),\u0005\u000e\b\u0002*,\u0005\u0010\t\u0002+(\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+*\u0003\u0002\u0002\u0002,\u000b\u0003",
    "\u0002\u0002\u0002-.\u0007\u0005\u0002\u0002.1\u0005\u000e\b\u0002/",
    "0\u0007\r\u0002\u000202\u0005\u000e\b\u00021/\u0003\u0002\u0002\u0002",
    "23\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000245\u0003\u0002\u0002\u000256\u0007\u0006\u0002\u00026\r\u0003",
    "\u0002\u0002\u000278\u0007\t\u0002\u00028\u000f\u0003\u0002\u0002\u0002",
    "9:\u0007\n\u0002\u0002:\u0011\u0003\u0002\u0002\u0002;<\u0007\u0007",
    "\u0002\u0002<=\u0007\b\u0002\u0002=\u0013\u0003\u0002\u0002\u0002\u0006",
    "\u0017\u0019+3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'group'", "'endgroup'", "'('", "')'", "'['", 
                     "']'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "STRING", "REGEX", "SKIP_WS", "NL", "OR", "INT", "THEN", 
                      "THROUGH", "SOME", "ANY" ];

var ruleNames =  [ "gramr", "then_block", "group", "endgroup", "block", 
                   "branch", "string", "regex", "char_class" ];

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
RegeasyParser.STRING = 7;
RegeasyParser.REGEX = 8;
RegeasyParser.SKIP_WS = 9;
RegeasyParser.NL = 10;
RegeasyParser.OR = 11;
RegeasyParser.INT = 12;
RegeasyParser.THEN = 13;
RegeasyParser.THROUGH = 14;
RegeasyParser.SOME = 15;
RegeasyParser.ANY = 16;

RegeasyParser.RULE_gramr = 0;
RegeasyParser.RULE_then_block = 1;
RegeasyParser.RULE_group = 2;
RegeasyParser.RULE_endgroup = 3;
RegeasyParser.RULE_block = 4;
RegeasyParser.RULE_branch = 5;
RegeasyParser.RULE_string = 6;
RegeasyParser.RULE_regex = 7;
RegeasyParser.RULE_char_class = 8;

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
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RegeasyParser.T__0) | (1 << RegeasyParser.T__1) | (1 << RegeasyParser.THEN))) !== 0)) {
            this.state = 21;
            switch(this._input.LA(1)) {
            case RegeasyParser.THEN:
                this.state = 18;
                this.then_block();
                break;
            case RegeasyParser.T__0:
                this.state = 19;
                this.group();
                break;
            case RegeasyParser.T__1:
                this.state = 20;
                this.endgroup();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
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
        this.state = 28;
        this.match(RegeasyParser.THEN);
        this.state = 29;
        this.block();
        this.state = 30;
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
        this.state = 32;
        this.match(RegeasyParser.T__0);
        this.state = 33;
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
        this.state = 35;
        this.match(RegeasyParser.T__1);
        this.state = 36;
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

BlockContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

BlockContext.prototype.regex = function() {
    return this.getTypedRuleContext(RegexContext,0);
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
    this.enterRule(localctx, 8, RegeasyParser.RULE_block);
    try {
        this.state = 41;
        switch(this._input.LA(1)) {
        case RegeasyParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.branch();
            break;
        case RegeasyParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.string();
            break;
        case RegeasyParser.REGEX:
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            this.regex();
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

BranchContext.prototype.string = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext,i);
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
    this.enterRule(localctx, 10, RegeasyParser.RULE_branch);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(RegeasyParser.T__2);
        this.state = 44;
        this.string();
        this.state = 47; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 45;
            this.match(RegeasyParser.OR);
            this.state = 46;
            this.string();
            this.state = 49; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===RegeasyParser.OR);
        this.state = 51;
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
    this.enterRule(localctx, 12, RegeasyParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
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
    this.enterRule(localctx, 14, RegeasyParser.RULE_regex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
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
    this.enterRule(localctx, 16, RegeasyParser.RULE_char_class);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(RegeasyParser.T__4);
        this.state = 58;
        this.match(RegeasyParser.T__5);
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
