const express = require('express');
const app = express();
const PORT = 3000;
// const router = require('./router');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('pages/index');
});

app.get("/guestbook", (req, res) => {
    const data = require('./messages.json');
    res.render('pages/guestbook', {data: data});
});

app.get("/newmessage", (req, res) => {
    res.render('pages/newmessage');
});

app.get("/ajaxmessage", (req, res) => {
    res.render('pages/ajaxmessage');
});

// app.use('/', router);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));


    

