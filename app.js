antlr4 = require("antlr4");
let lang_lexer = require("./antler/RegeasyLexer");
let lang_parser = require("./antler/RegeasyParser");
let fs = require("fs");


let input = fs.readFileSync("./test_script.resy", "utf8");
let chars = new antlr4.InputStream(input);
let lexer = new lang_lexer.RegeasyLexer(chars);
let tokens  = new antlr4.CommonTokenStream(lexer);
let parser = new lang_parser.RegeasyParser(tokens);
parser.buildParseTrees = true;
let tree = parser.calc();
let obj_tree = parse_tree_to_obj(tree, parser.ruleNames).children[0];

console.log(JSON.stringify(obj_tree));

function parse_tree_to_obj(tree, rule_names) {
    //todo switch this to using the rulenames
    let node_name = rule_names[tree.ruleIndex];
    if (node_name !== undefined){
        let children = tree.children.map((child) => {return parse_tree_to_obj(child, rule_names)});
        children = children.filter((child) => {return child !== undefined});
        return{
            text: tree.getText(),
            display:true,
            node: node_name,
            children: children
        }
    }
}
