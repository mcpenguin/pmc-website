// node script to run when updating pows

const prompt = require('prompt-sync')();
const fs = require('fs');

const powNo = process.argv[2]; // take first command line argument

// get contents of markdown file
const fileContents = fs.readFileSync(`./src/components/pows/pows/pow-${powNo}/content.md`, {encoding:'utf8', flag:'r'});
// get contents of json file containing contents
const jsonFile = fs.readFileSync(`./src/components/pows/content.json`, {encoding:'utf8', flag:'r'});
const jsonContents = JSON.parse(jsonFile);

// add (or update) content of json file for the pow with number powNo
jsonContents[powNo] = fileContents;

// update the json file with the new info
fs.writeFile(`./src/components/pows/content.json`, JSON.stringify(jsonContents), (err) => {
    if (err) throw err;
})