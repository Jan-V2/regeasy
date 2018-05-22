
function eval_ast(ast) {
    const node_types = {// todo auto generate this.
        open_group: "group",
        close_group: "endgroup",
        then_block: "then_block",
        block: "block",
        string: "string",
        branch: "branch",
    };

    (function validate_ast() {
        (function validate_groups() {
            let group_nodes = ast.children.filter((child) => {
                return child.type === node_types.open_group || child.type === node_types.close_group;
            });
            let open_groups = 0;
            group_nodes.forEach((node) => {
                if (node.type === node_types.open_group) {
                    open_groups++;
                } else if (node.type === node_types.close_group) {
                    if (open_groups < 1) {
                        throw "Error validating group_nodes. Group closed when none where open.";
                    } else {
                        open_groups--;
                    }
                } else {
                    throw "Node of wrong type found when validating groups. found:" + node.toString();
                }
            });
            if (open_groups !== 0) {
                throw "Error validating group_nodes. Not all groups closed.";
            }
        })();
    })();

    function _ret(ret) {
        if (ret === undefined) {
            throw "Unexpected undefined error.";
        } else {
            return ret;
        }
    }

    function foreach_eval(nodes, eval_func) {
        let ret = "";
        nodes.forEach((node) => {
            ret += _ret(eval_func(node));
        });
        return _ret(ret);
    }

    const eval = {
        then_block: function(node) {
            return _ret(this.block(node.children[0]));
        },
        block: function(node) {
            return _ret(foreach_eval(node.children, (child) => {
                return _ret(eval[child.type](child));
            }));
        },
        branch: function(node) {
            return "(" + foreach_eval(node.children, (child) => {
                    return _ret(eval[child.type](child)) + "|";
                }).slice(0, -1)
                + ")";
        },
        string: function(node) {
            return _ret(node.text.replace(/["']/g, ""));
        },
    };

    return (function build_regex() {
        let regex = "";
        return (function then_block_level() {
            ast.children.forEach((ast_child) => {
                switch (ast_child.type) {
                    case node_types.then_block:
                        regex += eval.then_block(ast_child);
                        break;
                    case node_types.open_group:
                        regex += "(";
                        break;
                    case node_types.close_group:
                        regex += ")";
                        break;
                    default:
                        throw "Found improper node as child of ast. " + ast_child.toString();
                }
            });
            console.log(regex);
            return regex;
        })();
    })();
}
