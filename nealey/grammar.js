// Generated automatically by nearley, version 2.11.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "E", "symbols": ["A", "B", "A", "B", "A"]},
    {"name": "A$string$1", "symbols": [{"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "A", "symbols": ["A$string$1"]},
    {"name": "B", "symbols": [{"literal":"+"}]},
    {"name": "B", "symbols": [{"literal":"-"}]},
    {"name": "B", "symbols": [{"literal":"*"}]}
]
  , ParserStart: "E"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
