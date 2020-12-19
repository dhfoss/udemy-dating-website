const express = require('express');
const exphs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;

// veiw engine
app.engine('handlebars', exphs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
});

app.listen(PORT, () => {
    console.log('App is listening at http://localhost:' + PORT);
});