require('dotenv').config()
const express = require('express');
const app = express();
const URI = process.env.MONGO_URI;
const {MongoClient} = require('mongodb');
const client = new MongoClient(URI, { useUnifiedTopology: true});
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/pull', (req, res) => {
  client.connect().then(client => {
    const db = client.db('goopt2');
    db.collection('quotes').find({ }, {projection:{_id: 0}}).toArray().then(results => {
      res.json(results);
    });
  });
});

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
 });

app.listen(8080, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('api is running on 8080');
  }
});