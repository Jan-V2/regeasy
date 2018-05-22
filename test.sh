#!/usr/bin/env bash

bash ./build.sh
echo generating tokens
node ./test/parse_keywords_to_json.js
echo running test
