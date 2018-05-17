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


// Enter a parse tree produced by RegeasyParser#then_block.
RegeasyListener.prototype.enterThen_block = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#then_block.
RegeasyListener.prototype.exitThen_block = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#group.
RegeasyListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#group.
RegeasyListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#endgroup.
RegeasyListener.prototype.enterEndgroup = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#endgroup.
RegeasyListener.prototype.exitEndgroup = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#block.
RegeasyListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#block.
RegeasyListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#branch.
RegeasyListener.prototype.enterBranch = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#branch.
RegeasyListener.prototype.exitBranch = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#string.
RegeasyListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#string.
RegeasyListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#regex.
RegeasyListener.prototype.enterRegex = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#regex.
RegeasyListener.prototype.exitRegex = function(ctx) {
};


// Enter a parse tree produced by RegeasyParser#char_class.
RegeasyListener.prototype.enterChar_class = function(ctx) {
};

// Exit a parse tree produced by RegeasyParser#char_class.
RegeasyListener.prototype.exitChar_class = function(ctx) {
};



exports.RegeasyListener = RegeasyListener;