let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/email', (req, res) => {
  if(req.query.email === 'dmitriy@dmitriy.org') {
    return res.send([{email: 'dmitriy@dmitriy.org'}]);
  }
  
  res.status(200).send([]);
});

app.get('/close', (req, res) => {
  server.close();
  res.end();
});

let server = app.listen(12321, '127.0.0.1', () => {
  console.log('started test server');
});
