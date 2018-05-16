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

// Enter a parse tree produced by RegeasyParser#gramr.
RegeasyListener.prototype.enterGramr = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#gramr.
RegeasyListener.prototype.exitGramr = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#group.
RegeasyListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#group.
RegeasyListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#then_block.
RegeasyListener.prototype.enterThen_block = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#then_block.
RegeasyListener.prototype.exitThen_block = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#block.
RegeasyListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#block.
RegeasyListener.prototype.exitBlock = function(ctx) {
};



exports.RegeasyListener = RegeasyListener;