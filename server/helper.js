const axios = require('axios');
const key = require('../config.js');

let headers = {
  'Authorization': key.TOKEN
};

const authedGet = (url, callback) => {
  axios.get(url, {headers})
  .then((returned) => {
    callback(null, returned.data);
  })
  .catch((err) => {
    callback(err);
  })
}

const authedPost = (url, data, callback) => {
  axios.post(url, data, {headers})
  .then((returned) => {
    callback(null, returned.data);
  })
  .catch((err) => {
    callback(err);
  })
}

module.exports = {
  authedGet,
  authedPost
}