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
let tree = parser.prog();
let obj_tree = parse_tree_to_obj(tree);
console.log(JSON.stringify(obj_tree));

function parse_tree_to_obj(tree) {
    let end_node_name = "TerminalNodeImpl";
    let error_node_name = "ErrorNodeImpl";
    let node_name = tree.constructor.name;
    if (node_name === end_node_name || node_name === error_node_name){
        return{
            node: node_name,
            children: []
        } 
    }else{
        return{
            node: node_name,
            children: tree.children.map((child) => {return parse_tree_to_obj(child)})
        }
    }
}
