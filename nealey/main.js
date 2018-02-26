var nearley = require("nearley");
var grammar = require("./grammar.js");

// Create a Parser object from our grammar.
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed("foo\n");

// parser.results is an array of possible parsings.
console.log(parser.results); // [[[[ "foo" ],"\n" ]]]