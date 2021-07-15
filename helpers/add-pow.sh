#!/bin/bash

# Bash script to add imports to export.js when new pow has been uploaded
# usage: bash add-pow.sh <pow number> <title image file name>
# for now, title image can only be in jpg format

# must run in root directory

# get variables
noPow=$1
imgPath=$2

# put the necessary exports in export.js
printf "
export {default as img${noPow}} from './pows/pow-${noPow}/${imgPath}';
export {default as details${noPow}} from './pows/pow-${noPow}/config.json';
" >> './src/components/pows/export.js';

# update the json file with the content
node helpers/update-pow.js ${noPow};