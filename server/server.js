const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const authedGet = require('./helper.js').authedGet;
const authedPost = require('./helper.js').authedPost;

app.use(express.static(__dirname + '/../client/dist'));
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



app.listen(port, () => {
  console.log(`listening at port ${port}`);
})


