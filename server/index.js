const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.get('/content', (req, res) => {
  const str = [
    {
      name: 'elvis',
      username: 'elvisco201',
      message: 'my first tweet',
    },
  ];

  res.send(JSON.stringify(str));
});

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

require('./routes/userRoutes')(app);

// app.get("/api/signup", (req, res) => {
//   res.send({ Hello: "is this for real" });
// });

app.listen(5000);
