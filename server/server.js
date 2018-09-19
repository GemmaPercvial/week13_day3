const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');
const createRouter = require('./helpers/create_routers');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucket_list')
    const bucketListItemsCollection = db.collection('bucket_list_items')
    const bucketListRouter = createRouter(bucketListItemsCollection)
    app.use('/api/bucket_list_items', bucketListRouter);
  })
  .catch(console.err);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
});
