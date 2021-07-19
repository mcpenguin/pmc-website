#!/bin/bash
# Bash script to create a new problem of the week (POW)
# usage: bash init-pow.sh
# get current number of pows
cd "src/components/pows/pows";
noOfPOWs=$(find . -mindepth 1 -maxdepth 1 -type d | wc -l);
newN=$(($noOfPOWs + 1));
echo $newN;
# create a folder "pow-<noOfPOWS+1>" in the 'pows' folder
mkdir "pow-$newN";
cd "pow-$newN";
# initialize the necessary files
# (1) config.json file containing the name and date (added) for the pow
touch "config.json";
echo '{"name": "name of your pow goes here", "date": "date of the pow goes here"}' > config.json;
# (2) content.md file containing the content of the pow
touch "content.md";
echo "Here, you can write Markdown content for the POW." > content.md;
echo "Folder for POW #$newN has been successfully initialized";