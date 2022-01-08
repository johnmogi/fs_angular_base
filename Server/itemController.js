const express = require('express');
const itemLogic = require('./itemLogic');
const Item = require('./models/item');
const router = express.Router();

// GET http://localhost:3000/api/items
router.get("/", async (request, response) => {
    try {
      const items = await itemLogic.getAllItemsAsync();
      response.json(items);
    } catch (err) {
      console.log(err);
      response.status(500).send(err.message);
    }
  });

 
// GET http://localhost:3000/api/items/7
router.get("/:_id", async (request, response) => {
    try {
      const _id = request.params._id;
      const item = await itemLogic.getOneItemAsync(_id);
  
      if (!item) {
        response.sendStatus(404);
        return;
      }
  
      response.json(item);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });
  
// POST http://localhost:3000/api/items
router.post("/", async (request, response) => {
    const body = request.body;
    try {
      const item = new Item(body);
      const addedItem = await itemLogic.addItem(item);
      response.status(201).json(addedItem);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });


  module.exports = router;