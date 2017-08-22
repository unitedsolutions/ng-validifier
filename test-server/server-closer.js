let request = require('request');

request('http://localhost:12321/close', (err, res, body) => {
  if(err) {
    return console.error(err);
  }
  
  console.log('closed test server');
});
