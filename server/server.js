const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const authedGet = require('./helper.js').authedGet;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening at port ${port}`)
  authedGet('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/71697', (err, data) =>{
    console.log(data);
  });
})