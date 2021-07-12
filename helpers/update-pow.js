// node script to run when updating pows

const prompt = require('prompt-sync')();
const fs = require('fs');

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

// get number of problems of the week
const noPOWs = getDirectories('./src/components/pows/pows').length;

// iterate over each problem of the week
for (let powNo = 1; powNo <= noPOWs; powNo++) {
    // get contents of markdown file
    const fileContents = fs.readFileSync(`./src/components/pows/pows/pow-${powNo}/content.md`, { encoding: 'utf8', flag: 'r' });

    // get contents of json file containing contents
    const jsonFile = fs.readFileSync(`./src/components/pows/content.json`, { encoding: 'utf8', flag: 'r' });
    const jsonContents = JSON.parse(jsonFile);

    // add (or update) content of json file for the pow with number powNo
    jsonContents[powNo] = fileContents;

    // update the json file with the new info
    fs.writeFileSync(`./src/components/pows/content.json`, JSON.stringify(jsonContents))
}