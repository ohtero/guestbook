const express = require('express');
const fs = require ('fs');
const app = express();
const PORT = 3000;
// const router = require('./router');

function Message(name, country, message) {
    this.name = name;
    this.country = country;
    this.message = message;
};

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('pages/index');
});

app.get("/guestbook", (req, res) => {
    const messages = require('./messages.json');
    res.render('pages/guestbook', {messages: messages});
});

app.get("/newmessage", (req, res) => {
    res.render('pages/newmessage');
    // let entry = new Message("testinimi", "testimaa", "testiviesti");
    // let messages = JSON.parse(fs.readFileSync('./messages.json'));
    // messages.push(entry);
    // fs.writeFileSync('./messages.json',  JSON.stringify(messages));
  

});

app.get("/ajaxmessage", (req, res) => {
    res.render('pages/ajaxmessage');
});

// app.use('/', router);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));


    

