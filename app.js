const express = require('express');
const app = express();
const requestIp = require('request-ip');

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

app.get('/*', (req, resp) => {
  resp.render('sheet')
})
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on  http://127.0.0.1:${PORT}...`);
});