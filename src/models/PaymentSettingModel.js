const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
        // productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        // userID:{type:mongoose.Schema.Types.ObjectId,required:true},
        store_id:{type:String,required:true},
        store_passwd:{type:String,required:true},
        currency:{type:String,required:true},
        success_url:{type:String,required:true},
        fail_url:{type:String,required:true},
        cancel_url:{type:String,required:true},
        ipn_url:{type:String,required:true},
        init_url:{type:String,required:true}
    },
    {timestamps: true, versionKey: false}
)

const PaymentSettingsModel = mongoose.model('paymentsettings', DataSchema)
module.exports = PaymentSettingsModel;