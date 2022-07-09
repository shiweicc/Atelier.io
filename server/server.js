const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const authedGet = require('./helper.js').authedGet;
const authedPost = require('./helper.js').authedPost;
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/../client/dist'));
app.use('/productpage/*', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  authedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/71697')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.post('/products', (req, res) => {
  authedPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/71697', req.data)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.get('/products/:id', (req, res) => {
  let productURL = req.url;
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${productURL}`)
    .then((product) => {
      req.product = product.data;
      return authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${productURL}/styles`)
    })
    .then((styles) => {
      res.send({product: req.product, styles: styles.data});
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})