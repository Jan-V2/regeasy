// Generated from Regeasy.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RegeasyParser.
function RegeasyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RegeasyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RegeasyListener.prototype.constructor = RegeasyListener;

// Enter a parse tree produced by RegeasyParser#prog.
RegeasyListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#prog.
RegeasyListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#expr.
RegeasyListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#expr.
RegeasyListener.prototype.exitExpr = function(ctx) {
};



exports.RegeasyListener = RegeasyListener;