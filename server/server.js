// import enviroment variables for deployment
require('dotenv').config();
// console.log(process.env)

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const authedGet = require('./helper.js').authedGet;
const authedPost = require('./helper.js').authedPost;
const authedPut = require('./helper.js').authedPut;
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/../client/dist'));
app.use('/productpage/*', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

//******************* get current product info *******************//
app.get('/products/:id', (req, res) => {
  let endpoint = req.originalUrl;
  let url = apiUrl + `${endpoint}`;

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
app.get('/products/:id/related', (req, res) => {
  let endpoint = req.originalUrl;
  let url = apiUrl + `${endpoint}`;

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
app.get('/products/:id/styles', (req, res) => {
  let endpoint = req.originalUrl;
  let url = apiUrl + `${endpoint}`;

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



//******************* get Questions and Answers list *******************//
app.get('/questions', (req, res) => {
  console.log(req.method, req.url);
  const product_id = req.url.substring(req.url.indexOf('?') + 1);
  //console.log(product_id);
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
  const question_id = req.url.substring(req.url.indexOf('=') + 1);
  const id = question_id.substring(0, 6);
  const count = question_id.substring(question_id.indexOf('&'));
  //console.log(id, count);

  authedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/' + id + '/answers?' + count)
    .then((results) => {
      //console.log(res.data);
      res.status(200).send(results.data.results);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.put('/questions/helpful', (req, res) => {
  const question_id = req.body.question_id;
  //console.log(question_id);
  authedPut('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/' + question_id + '/helpful')
    .then((results) => {
      res.status(204).send('put succ');
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.put('/answers/helpful', (req, res) => {
  const answer_id = req.body.answer_id;
  //console.log(answer_id);
  authedPut('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/' + answer_id + '/helpful')
    .then((results) => {
      res.status(204).send('put succ');
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.put('/answers/report', (req, res) => {
  const answer_id = req.body.answer_id;
  console.log(answer_id);
  authedPut('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/' + answer_id + '/report')
    .then((results) => {
      res.status(204).send('put report succ');
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.post('/addAnswer', (req, res) => {
  const question_id = req.body.question_id;
  delete req.body.question_id;
  // console.log(req.body);
  // const data = JSON.stringify(req.body);
  // //console.log(question_id);
  console.log(req.body);
  authedPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/' + question_id + '/answers', req.body)
    .then((result) => {
      //console.log("here", result.status);
      res.status(201).send('Answer created');
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})


app.post('/addQuestion', (req, res) => {
  //const product_id = req.body.product_id;
  //delete req.body.question_id;
  console.log(req.body);
  const product_id = parseInt(req.body.product_id);
  req.body.product_id = product_id;
  console.log(JSON.stringify(req.body));
  authedPost('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions', req.body)
    .then((result) => {
      console.log(result.status);
      res.status(201).send('Question created');
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})



//*********************************************************************************//

app.get('/products/:id', (req, res) => {
  let productURL = req.url;
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${productURL}`)
    .then((product) => {
      req.product = product.data;
      return authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${productURL}/styles`)
    })
    .then((styles) => {
      res.send({ product: req.product, styles: styles.data });
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

  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/`, {product_id: req.query.productID, sort: req.query.reviewsSort, count: req.query.reviewsCount})

    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.get('/reviews/meta/', (req, res) => {
  authedGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/`, { product_id: req.query.productID })
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.sendStatus(400);
    })
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  authedPut(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${req.params.review_id}/helpful`)
  .then((results) => {
    res.sendStatus(204);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.put('/reviews/:review_id/report', (req, res) => {
  authedPut(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${req.params.review_id}/report`)
  .then((results) => {
    res.sendStatus(204);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
})


