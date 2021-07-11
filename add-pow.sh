#!/bin/bash

# Bash script to add imports to export.js when new pow has been uploaded
# usage: bash add-pow.sh <pow number> <name of pow> <date the pow was released>
# for now, title image can only be in jpg format

# must run in root directory

noPow=$1
namePow=$2
datePow=$3

printf "
export {default as img${noPow}} from './pows/pow-${noPow}/title.jpg';
export const title${noPow} = '${namePow}';
export const date${noPow} = '${datePow}';
" >> './src/components/pows/export.js';

