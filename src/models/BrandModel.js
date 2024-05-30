const mongoose = require('mongoose');
const {model} = require("mongoose");

const DataSchema = mongoose.Schema({
        brandName: {type: String, unique: true, required: true},
        brandImg: {type: String, required:true}
    },
    {timestamps: true, versionKey: false}
)

const BrandModel = mongoose.model('brands', DataSchema)

module.exports = BrandModel