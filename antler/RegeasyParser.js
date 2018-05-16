// Generated from Regeasy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RegeasyListener = require('./RegeasyListener').RegeasyListener;
var grammarFileName = "Regeasy.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\n/\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003\u000e\u0003%\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0003\u0004\u0007\u0002",
    "\u0004\u0006\b\n\u0002\u0004\u0003\u0002\u0005\u0006\u0003\u0002\u0003",
    "\u0004-\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002",
    "\u0002\u0002\u0006&\u0003\u0002\u0002\u0002\b*\u0003\u0002\u0002\u0002",
    "\n,\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007",
    "\t\u0002\u0002\u000e\u0010\u0003\u0002\u0002\u0002\u000f\f\u0003\u0002",
    "\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002",
    "\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0015\b\u0003",
    "\u0001\u0002\u0015\u0018\u0005\u0006\u0004\u0002\u0016\u0018\u0007\n",
    "\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0017\u0016\u0003\u0002",
    "\u0002\u0002\u0018#\u0003\u0002\u0002\u0002\u0019\u001a\f\u0005\u0002",
    "\u0002\u001a\u001b\u0005\b\u0005\u0002\u001b\u001c\u0005\u0004\u0003",
    "\u0006\u001c\"\u0003\u0002\u0002\u0002\u001d\u001e\f\u0004\u0002\u0002",
    "\u001e\u001f\u0005\n\u0006\u0002\u001f \u0005\u0004\u0003\u0005 \"\u0003",
    "\u0002\u0002\u0002!\u0019\u0003\u0002\u0002\u0002!\u001d\u0003\u0002",
    "\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$",
    "\u0003\u0002\u0002\u0002$\u0005\u0003\u0002\u0002\u0002%#\u0003\u0002",
    "\u0002\u0002&\'\u0007\u0007\u0002\u0002\'(\u0005\u0004\u0003\u0002(",
    ")\u0007\b\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*+\t\u0002\u0002",
    "\u0002+\t\u0003\u0002\u0002\u0002,-\t\u0003\u0002\u0002-\u000b\u0003",
    "\u0002\u0002\u0002\u0006\u0011\u0017!#"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];

var symbolicNames = [ 'null', "PLUS", "MINUS", "MUL", "DIV", "BR_OP", "BR_CL", 
                      "NEWLINE", "INT" ];

var ruleNames =  [ "calc", "num", "high_priority", "high_opr", "low_opr" ];

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
RegeasyParser.PLUS = 1;
RegeasyParser.MINUS = 2;
RegeasyParser.MUL = 3;
RegeasyParser.DIV = 4;
RegeasyParser.BR_OP = 5;
RegeasyParser.BR_CL = 6;
RegeasyParser.NEWLINE = 7;
RegeasyParser.INT = 8;

RegeasyParser.RULE_calc = 0;
RegeasyParser.RULE_num = 1;
RegeasyParser.RULE_high_priority = 2;
RegeasyParser.RULE_high_opr = 3;
RegeasyParser.RULE_low_opr = 4;

function CalcContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_calc;
    return this;
}

CalcContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CalcContext.prototype.constructor = CalcContext;

CalcContext.prototype.num = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumContext);
    } else {
        return this.getTypedRuleContext(NumContext,i);
    }
};

CalcContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RegeasyParser.NEWLINE);
    } else {
        return this.getToken(RegeasyParser.NEWLINE, i);
    }
};


CalcContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterCalc(this);
	}
};

CalcContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitCalc(this);
	}
};




RegeasyParser.CalcContext = CalcContext;

RegeasyParser.prototype.calc = function() {

    var localctx = new CalcContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RegeasyParser.RULE_calc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RegeasyParser.BR_OP || _la===RegeasyParser.INT) {
            this.state = 10;
            this.num(0);
            this.state = 11;
            this.match(RegeasyParser.NEWLINE);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function NumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_num;
    return this;
}

NumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumContext.prototype.constructor = NumContext;

NumContext.prototype.high_priority = function() {
    return this.getTypedRuleContext(High_priorityContext,0);
};

NumContext.prototype.INT = function() {
    return this.getToken(RegeasyParser.INT, 0);
};

NumContext.prototype.num = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumContext);
    } else {
        return this.getTypedRuleContext(NumContext,i);
    }
};

NumContext.prototype.high_opr = function() {
    return this.getTypedRuleContext(High_oprContext,0);
};

NumContext.prototype.low_opr = function() {
    return this.getTypedRuleContext(Low_oprContext,0);
};

NumContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterNum(this);
	}
};

NumContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitNum(this);
	}
};



RegeasyParser.prototype.num = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, RegeasyParser.RULE_num, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        switch(this._input.LA(1)) {
        case RegeasyParser.BR_OP:
            this.state = 19;
            this.high_priority();
            break;
        case RegeasyParser.INT:
            this.state = 20;
            this.match(RegeasyParser.INT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 33;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 31;
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new NumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RegeasyParser.RULE_num);
                    this.state = 23;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 24;
                    this.high_opr();
                    this.state = 25;
                    this.num(4);
                    break;

                case 2:
                    localctx = new NumContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RegeasyParser.RULE_num);
                    this.state = 27;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 28;
                    this.low_opr();
                    this.state = 29;
                    this.num(3);
                    break;

                } 
            }
            this.state = 35;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function High_priorityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_high_priority;
    return this;
}

High_priorityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
High_priorityContext.prototype.constructor = High_priorityContext;

High_priorityContext.prototype.BR_OP = function() {
    return this.getToken(RegeasyParser.BR_OP, 0);
};

High_priorityContext.prototype.num = function() {
    return this.getTypedRuleContext(NumContext,0);
};

High_priorityContext.prototype.BR_CL = function() {
    return this.getToken(RegeasyParser.BR_CL, 0);
};

High_priorityContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterHigh_priority(this);
	}
};

High_priorityContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitHigh_priority(this);
	}
};




RegeasyParser.High_priorityContext = High_priorityContext;

RegeasyParser.prototype.high_priority = function() {

    var localctx = new High_priorityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RegeasyParser.RULE_high_priority);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.match(RegeasyParser.BR_OP);
        this.state = 37;
        this.num(0);
        this.state = 38;
        this.match(RegeasyParser.BR_CL);
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

function High_oprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_high_opr;
    return this;
}

High_oprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
High_oprContext.prototype.constructor = High_oprContext;

High_oprContext.prototype.MUL = function() {
    return this.getToken(RegeasyParser.MUL, 0);
};

High_oprContext.prototype.DIV = function() {
    return this.getToken(RegeasyParser.DIV, 0);
};

High_oprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterHigh_opr(this);
	}
};

High_oprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitHigh_opr(this);
	}
};




RegeasyParser.High_oprContext = High_oprContext;

RegeasyParser.prototype.high_opr = function() {

    var localctx = new High_oprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RegeasyParser.RULE_high_opr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        _la = this._input.LA(1);
        if(!(_la===RegeasyParser.MUL || _la===RegeasyParser.DIV)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

function Low_oprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RegeasyParser.RULE_low_opr;
    return this;
}

Low_oprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Low_oprContext.prototype.constructor = Low_oprContext;

Low_oprContext.prototype.PLUS = function() {
    return this.getToken(RegeasyParser.PLUS, 0);
};

Low_oprContext.prototype.MINUS = function() {
    return this.getToken(RegeasyParser.MINUS, 0);
};

Low_oprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.enterLow_opr(this);
	}
};

Low_oprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RegeasyListener ) {
        listener.exitLow_opr(this);
	}
};




RegeasyParser.Low_oprContext = Low_oprContext;

RegeasyParser.prototype.low_opr = function() {

    var localctx = new Low_oprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RegeasyParser.RULE_low_opr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        _la = this._input.LA(1);
        if(!(_la===RegeasyParser.PLUS || _la===RegeasyParser.MINUS)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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


RegeasyParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.num_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RegeasyParser.prototype.num_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RegeasyParser = RegeasyParser;
