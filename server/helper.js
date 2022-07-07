const axios = require('axios');
const key = require('../config.js');

// Create authentication headers
let headers = {
  'User-Agent': 'request',
  'Authorization': `${key.TOKEN}`
};

// Authenticate get request
const authedGet = (url) => {
  let options = {
    method: 'get',
    url: `${url}`,
    headers: headers,
    params: {
      page: 1,
      count: 5
    }
  };
  return axios(options);
}

// Authenticate post request
const authedPost = (url, data) => {
  let options = {
    method: 'post',
    url: `${url}`,
    headers: headers,
    data: JSON.stringify({data: data})
  };
  return axios(options);
}

module.exports = {
  authedGet,
  authedPost
}