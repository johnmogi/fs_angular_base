const dal = require("./dal");
const Item = require("./models/item");

dal.connectAsync().then((db => console.log("we're connected on " + db.name))).catch((err =>console.log(err)));


function getAllItemsAsync() {
    return Item.find().exec;
    return new Promise((resolve, reject) => {
      Item.find({}, (err, items) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(items);
      });
    });
  }
  
  function getOneItemAsync(_id) {
    return new Promise((resolve, reject) => {
      Item.findOne({ _id }, (err, item) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(item);
      });
    });
  }
  
function addItem(item){
    return item.save()
}

module.exports = {addItem, getAllItemsAsync, getOneItemAsync }