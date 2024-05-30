const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    img1:{type:String, required:true},
    img2:{type:String, required:true},
    img3:{type:String},
    img4:{type:String},
    img5:{type:String},
    des:{type:String},
    color:{type:String},
    size:{type:String},
    productID:{type:mongoose.Schema.Types.ObjectId, required:true}
},
    {timestamps:true, versionKey:false}
)

const ProductDetailsModel = mongoose.model('productdetails', DataSchema)

module.exports = ProductDetailsModel