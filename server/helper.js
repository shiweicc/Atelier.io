const axios = require('axios');
const key = require('../config.js');

// Create authentication headers
let headers = {
  'User-Agent': 'request',
  'Authorization': `${key.TOKEN}`
};

// Authenticate get request
const authedGet = (url, params) => {
  let options = {
    method: 'get',
    url: `${url}`,
    headers: headers,
    params: params
  };
  return axios(options);
}

// Authenticate post request
const authedPost = (url, data) => {
  console.log("post here");
  let options = {
    method: 'post',
    url: `${url}`,
    headers: headers,
    //data: JSON.stringify({data: data})
    data: data
  };

  //console.log(axios(options));
  return axios(options);
}

//Authenticate put request
// const authedPut = (url) => {
//   let options = {
//     method: 'put',
//     url: `${url}`,
//     headers: headers,
//   };
//   return axios(options);
// }

const authedPut = (url, params) => {
  let options = {
    method: 'put',
    url: `${url}`,
    headers: headers,
    params: params
  };
  return axios(options);
}

module.exports = {
  authedGet,
  authedPost,
  authedPut
}