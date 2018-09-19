const express = require('express');


const createRouter = function(collection){
  const router = express.Router();

// INDEX
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => {
      res.json(docs)
    })
    .catch((err) => {
      console.error(err);
    })
  });

// NEW
router.post('/', (req, res) => {
  const newItem = req.body;
  collection.insertOne(newItem)
  .then(() => {
    collection
    .find()
    .toArray()
    .then((docs) => {
      res.json(docs)
    })
  })
  .catch((err) => {
    console.error(err);
  })
})






  return router;
}

module.exports = createRouter;
