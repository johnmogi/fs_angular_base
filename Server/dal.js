const mongoose = require("mongoose");

function connectAsync() {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      "mongodb://localhost:27017/newTest",
      (err, mongo) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(mongo);
      }
    );
  });
}

module.exports = {
  connectAsync,
};