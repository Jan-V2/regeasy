#!/usr/bin/env bash

echo building parser
cd ./antler/
antlr4 -Dlanguage=JavaScript Regeasy.g4
echo building ast
cd ..
node app.js > ./ui/test_tree.json
echo running linter
./node_modules/.bin/eslint app.js --fix
./node_modules/.bin/eslint ./ui/*.js --fix
./node_modules/.bin/eslint ./test/*.js --fix
echo build complete
