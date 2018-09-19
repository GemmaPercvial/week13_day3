const express = require('express');
const ObjectID = require('mongodb').ObjectID;


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

// DELETE
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({_id: ObjectID(id)})
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

// UPDATE
  router.put('/:id', (req, res) => {
   const id = req.params.id;
   const updatedItem = req.body;
   collection.updateOne(
     {_id: ObjectID(id)},
     {$set: updatedItem})
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
 });
})
  return router;
}

module.exports = createRouter;
