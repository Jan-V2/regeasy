// Generated from Regeasy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegeasyListener = require('./RegeasyListener').RegeasyListener;
var grammarFileName = "Regeasy.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000e\u001d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0017\n\u0004\u0005\u0004",
    "\u0019\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006",
    "\u0002\u0004\u0006\b\u0002\u0002\u001b\u0002\n\u0003\u0002\u0002\u0002",
    "\u0004\f\u0003\u0002\u0002\u0002\u0006\u0018\u0003\u0002\u0002\u0002",
    "\b\u001a\u0003\u0002\u0002\u0002\n\u000b\u0005\u0006\u0004\u0002\u000b",
    "\u0003\u0003\u0002\u0002\u0002\f\r\u0007\u000e\u0002\u0002\r\u000e\u0005",
    "\u0006\u0004\u0002\u000e\u000f\u0007\r\u0002\u0002\u000f\u0005\u0003",
    "\u0002\u0002\u0002\u0010\u0019\u0005\u0004\u0003\u0002\u0011\u0012\u0007",
    "\f\u0002\u0002\u0012\u0016\u0005\b\u0005\u0002\u0013\u0017\u0007\f\u0002",
    "\u0002\u0014\u0017\u0005\u0006\u0004\u0002\u0015\u0017\u0007\u0002\u0002",
    "\u0003\u0016\u0013\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002",
    "\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002",
    "\u0002\u0018\u0010\u0003\u0002\u0002\u0002\u0018\u0011\u0003\u0002\u0002",
    "\u0002\u0019\u0007\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0004\u0002",
    "\u0002\u001b\t\u0003\u0002\u0002\u0002\u0004\u0016\u0018"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', 'null', 'null', "'+'", "'-'", "'*'", "'/'", 
                     "'('", "')'", 'null', 'null', "'end'", "'group'" ];

var symbolicNames = [ 'null', "SKIP_WS", "STRING", "PLUS", "MINUS", "MUL", 
                      "DIV", "BR_OP", "BR_CL", "INT", "THEN", "GROUP_CLOSE", 
                      "GROUP_OPEN" ];

var ruleNames =  [ "gramr", "group", "then_block", "block" ];

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
RegeasyParser.SKIP_WS = 1;
RegeasyParser.STRING = 2;
RegeasyParser.PLUS = 3;
RegeasyParser.MINUS = 4;
RegeasyParser.MUL = 5;
RegeasyParser.DIV = 6;
RegeasyParser.BR_OP = 7;
RegeasyParser.BR_CL = 8;
RegeasyParser.INT = 9;
RegeasyParser.THEN = 10;
RegeasyParser.GROUP_CLOSE = 11;
RegeasyParser.GROUP_OPEN = 12;

RegeasyParser.RULE_gramr = 0;
RegeasyParser.RULE_group = 1;
RegeasyParser.RULE_then_block = 2;
RegeasyParser.RULE_block = 3;

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

GramrContext.prototype.then_block = function() {
    return this.getTypedRuleContext(Then_blockContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.then_block();
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

GroupContext.prototype.GROUP_OPEN = function() {
    return this.getToken(RegeasyParser.GROUP_OPEN, 0);
};

GroupContext.prototype.then_block = function() {
    return this.getTypedRuleContext(Then_blockContext,0);
};

GroupContext.prototype.GROUP_CLOSE = function() {
    return this.getToken(RegeasyParser.GROUP_CLOSE, 0);
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
    this.enterRule(localctx, 2, RegeasyParser.RULE_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(RegeasyParser.GROUP_OPEN);
        this.state = 11;
        this.then_block();
        this.state = 12;
        this.match(RegeasyParser.GROUP_CLOSE);
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

Then_blockContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

Then_blockContext.prototype.THEN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RegeasyParser.THEN);
    } else {
        return this.getToken(RegeasyParser.THEN, i);
    }
};


Then_blockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Then_blockContext.prototype.then_block = function() {
    return this.getTypedRuleContext(Then_blockContext,0);
};

Then_blockContext.prototype.EOF = function() {
    return this.getToken(RegeasyParser.EOF, 0);
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
    this.enterRule(localctx, 4, RegeasyParser.RULE_then_block);
    try {
        this.state = 22;
        switch(this._input.LA(1)) {
        case RegeasyParser.GROUP_OPEN:
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.group();
            break;
        case RegeasyParser.THEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.match(RegeasyParser.THEN);
            this.state = 16;
            this.block();
            this.state = 20;
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 17;
                this.match(RegeasyParser.THEN);
                break;

            case 2:
                this.state = 18;
                this.then_block();
                break;

            case 3:
                this.state = 19;
                this.match(RegeasyParser.EOF);
                break;

            }
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

BlockContext.prototype.STRING = function() {
    return this.getToken(RegeasyParser.STRING, 0);
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
    this.enterRule(localctx, 6, RegeasyParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
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


exports.RegeasyParser = RegeasyParser;
