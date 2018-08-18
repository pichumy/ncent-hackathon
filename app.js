const express = require('express');
const logger = require('morgan');
const bodyParser = require ('body-parser');
const http = require('http');
const port = parseInt(process.env.PORT, 10) || 8000;
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome',
}));

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Listening on PORT', port);
});
