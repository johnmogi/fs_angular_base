const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        itemName : String,
        itemDescription: String
    },
    { versionKey : false , toJSON : {virtuals : true}, id:false}
)




const Item = mongoose.model("Item", itemSchema);

module.exports = Item ;