#!/usr/bin/env bash

cd ./antler/
antlr4 -Dlanguage=JavaScript Regeasy.g4
echo build lang
cd ..
node app.js > ./ui/test_tree.json
echo build complete