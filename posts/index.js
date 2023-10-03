const express = require('express');
const bodyParser = require('body-parser');
const { randomBtyes } = require('crypto');

const app = express();
app.use(bodyParser)

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBtyes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id, title
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
})