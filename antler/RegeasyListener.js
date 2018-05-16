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

// Enter a parse tree produced by RegeasyParser#calc.
RegeasyListener.prototype.enterCalc = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#calc.
RegeasyListener.prototype.exitCalc = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#num.
RegeasyListener.prototype.enterNum = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#num.
RegeasyListener.prototype.exitNum = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#high_priority.
RegeasyListener.prototype.enterHigh_priority = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#high_priority.
RegeasyListener.prototype.exitHigh_priority = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#high_opr.
RegeasyListener.prototype.enterHigh_opr = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#high_opr.
RegeasyListener.prototype.exitHigh_opr = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#low_opr.
RegeasyListener.prototype.enterLow_opr = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#low_opr.
RegeasyListener.prototype.exitLow_opr = function(ctx) {
};



exports.RegeasyListener = RegeasyListener;