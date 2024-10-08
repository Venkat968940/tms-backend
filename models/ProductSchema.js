const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    product_name : {type : String, required: true},
    desc : {type: String, required: true},
    website :  {type: String, required: true},
},{ collection: 'products' })


module.exports = mongoose.model('Products', ProductSchema);