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

let apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

//******************* get current product info *******************//
app.get('/products/:id', function (req, res) {
  let endpoint = req.originalUrl;
  let url =  apiUrl + `${endpoint}`;

  authedGet(url)
  .then((data) => {
    // console.log('Success get product data: ', data.data);
    res.status(201).send(data.data);
  })
  .catch((err) => {
    // console.log('Fail to get product data!', err);
    res.status(500).send('Fail to get product data!');
  })
});

//******************* get realted product ID list *******************//
app.get('/products/:id/related', function (req, res) {
  let endpoint = req.originalUrl;
  let url =  apiUrl + `${endpoint}`;

  authedGet(url)
  .then((data) => {
    // console.log('Success get related product ID list data: ', data.data);
    res.status(201).send(data.data);
  })
  .catch((err) => {
    // console.log('Fail to get product data!', err);
    res.status(500).send('Fail to get related product ID list data!');
  })
});

//******************* get realted product STYLES list *******************//
app.get('/products/:id/styles', function (req, res) {
  let endpoint = req.originalUrl;
  let url =  apiUrl + `${endpoint}`;

  authedGet(url)
  .then((data) => {
    // console.log('Success get related product STYLES list data: ', data.data);
    res.status(201).send(data.data);
  })
  .catch((err) => {
    // console.log('Fail to get product STYLES data!', err);
    res.status(500).send('Fail to get related product STYLES list data!');
  })
});

app.get('/questions', (req, res) => {
  // console.log(req.method, req.url);
  const product_id = req.url.substring(req.url.indexOf('?') + 1);
  authedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?' + product_id)
    .then((results) => {
      //console.log(results.data);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.get('/answers', (req, res) => {
  const product_id = req.url.substring(req.url.indexOf('=') + 1);
  const id = product_id.substring(0, 6);
  const count = product_id.substring(product_id.indexOf('&'));

  // console.log(id, count);
  authedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/' + id + '/answers?' + count)
    .then((results) => {
      //console.log(res.data);
      res.status(200).send(results.data.results);
    })
    .catch((err) => {
      // res.sendStatus(400);
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

app.get('/info/:productID', (req, res) => {
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.productID}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.get('/styles/:productID', (req, res) => {
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.productID}/styles`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.get('/reviews/', (req, res) => {
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`, {product_id: req.query.productID})
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.get('/reviews/meta/', (req, res) => {
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/`, {product_id: req.query.productID})
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})


