const express = require('express');
const app = express();
const requestIp = require('request-ip');
const url = require('url')

app.use(express.static('public'));
app.use(requestIp.mw())
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('storage');
});

app.get('/new', (req, resp) => {
  //resp.render('create')
  resp.render('sheet')
})

app.post('/upload*', (req, resp) => {
  resp.redirect('/')
})

app.get('/test', (req, resp) => {
  resp.render('test')
})

app.get('/*', (req, resp) => {
  resp.render('sheet', {
    data: url.parse(req.url, true).search
  })
})
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://127.0.0.1:${PORT})`);
});