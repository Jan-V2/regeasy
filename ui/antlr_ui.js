const parser = new Vueable();
const templ = httpGet("templates/tree_structure.vueable");

// demo data
let data = JSON.parse(httpGet("test_tree.json"));

// define the item component
Vue.component("item", {
    template: parser.parse(templ),
    props: {
        model: Object,
    },
    data: function() {
        return {
            open: true,
        };
    },
    computed: {
        isFolder: function() {
            return this.model.children &&
                this.model.children.length;
        },
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        addChild: function() {
            this.model.children.push({
                node: "new stuff",
            });
        },
    },
});

// boot up the demo
let demo = new Vue({
    el: "#demo",
    data: {
        treeData: data,
    },
});

$("#ans").text(eval_ast(data));
