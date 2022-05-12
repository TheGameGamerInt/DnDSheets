//Define packages
const express = require('express');
const url = require('url')
const ejs = require('ejs');
const path = require('path');

//Define express app and set parameters
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views');
app.set('view engine', 'ejs');

//Route paths to views
app.get('/', (req, res) => {
  res.render('storage.ejs');
});

app.get('/new', (req, resp) => {
  resp.render('Charactersheet')
})

app.get('/test', (req, resp) => {
  resp.render('Charactersheet')
})

app.get('/sheet*', (req, resp) => {
  resp.render('Charactersheet')
})

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://127.0.0.1:${PORT})`);
});