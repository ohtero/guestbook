const app = require('http');
const fs = require('fs');

const messageParser = require("./site_functions.js");


const messages = fs.readFileSync("./messages.json");
const parsedMessages = JSON.parse(messages);

app
    .createServer((req, res) => {
        res.writeHead(200, {"content-type": "text/html"});
        if (req.url === "/index") {
            res.write(fs.readFileSync('./index.html'));
        }
        else if (req.url === "/guestbook") {
            res.write(fs.readFileSync('./guestbook.html'));
        }
        if (req.url === "/newmessage") {
            res.write(fs.readFileSync('./index.html'));
        }
        res.end();
    })
    .listen("3000");


    

