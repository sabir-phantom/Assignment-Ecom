const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        userID:{type:mongoose.Schema.Types.ObjectId,required:true},
        invoiceID:{type:String,required:true},
        qty:{type:String,required:true},
        price:{type:String,required:true},
        color:{type:String,required:true},
        size:{type:String,required:true},

    },
    {timestamps: true, versionKey: false}
)

const InvoiceProductModel = mongoose.model('invoiceproducts', DataSchema)
module.exports = InvoiceProductModel;