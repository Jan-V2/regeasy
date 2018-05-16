const parser = new Vueable();
const templ = httpGet("templates/tree_structure.vueable");

// demo data
let data = JSON.parse(httpGet("test_tree.json"));

// define the item component
Vue.component('item', {
    template: parser.parse(templ),
    props: {
        model: Object
    },
    data: function () {
        return {
            open: true
        }
    },
    computed: {
        isFolder: function () {
            return this.model.children &&
                this.model.children.length
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        addChild: function () {
            this.model.children.push({
                node: 'new stuff'
            })
        }
    }
});

// boot up the demo
let demo = new Vue({
    el: '#demo',
    data: {
        treeData: data
    }
});

function eval_ast(tree){
    let parse_except = (logline) => {console.log(JSON.parse(JSON.stringify(tree))); throw `could not parse ast at this element ${logline}`};
    let cld = tree.children.length;
    if (cld === 0){
        return tree.text;
    }else if(cld === 3){
        let num1 = + eval_ast(tree.children[0]);
        let num2 = + eval_ast(tree.children[2]);
        switch (eval_ast(tree.children[1])){
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                parse_except("opr wrong");
        }
    }else if(cld === 1){
        let single_child = tree.children[0];
        if (single_child.node === "high_priority" || single_child.node === "num"){
            return eval_ast(single_child);
        }else{
            parse_except("single child is of type: " + single_child.node);
        }
    }else{
        parse_except("wrong child num " + tree.children.length);
    }
}

$("#ans").text(eval_ast(data));