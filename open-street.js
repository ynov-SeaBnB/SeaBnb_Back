const axios = require("axios");

const instance = axios.create({
    baseURL: 'https://maps.open-street.com/api/route/?origin=48.856614,2.3522219&destination=45.764043,4.835659&mode=driving&key=cle-fournie',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });