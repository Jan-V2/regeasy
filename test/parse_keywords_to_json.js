
const fs = require("fs");
const grammarfiles = [__dirname + "/../antler/Regeasy.g4"];


// todo there is no check for escaped single quotes. all single quotes are removed.

(function get_tokens() {
    const excludes = [
        "ESCAPED",
        "ERRORCHAR",
        "SKIPWS",
    ];

    const overrides = {
        "STRING": "('|\").*?('|\")",
    };

    const is_token = /[A-Z_]+\s*?:.*/;
    const comment_regex = /\/\/.*?\n/g;
    const match_token_groups = /^\s*?([A-Z]+)\s*?:(.*?)$/;
    const match_escaped_single_quotes = /\\'/g;// todo do this properly
    let json = grammarfiles.map((path) => {
        let text = fs.readFileSync(path, "utf8").replace(comment_regex, "");
        let lines = text.split(";");
        let tokens = lines.filter((line) => {
            return is_token.test(line);
        });
        return tokens.map((token) => {
            let match = match_token_groups.exec(token);
            let ret = {};
            // todo remove unescaped 's
            if (excludes.indexOf(match[1].trim()) === -1) {
                ret[match[1].trim()] = match[2].replace(/'/g, "").trim();
            }
            return ret;
        }).reduce(reduce_objects);
    }).reduce(reduce_objects);

    function reduce_objects(acc, array) {
        return Object.assign(acc, array);
    }

    Object.keys(overrides).forEach((k) => {
        json[k] = overrides[k];
    });

    fs.writeFileSync("./test/tokens.json", JSON.stringify(json), "utf8");
})();
