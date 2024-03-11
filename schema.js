const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    SKU:{
        type:String,
        required:true,
    },
    category_id:{
        type:Number,
        required:true,
        ref:'ProductCategory'
    },
    inventory_id:{
        type:Number,
        required:true,
        ref:'Inventory'
    },
    price:{
        type:Number,
        required:true
    },
    discount_id:{
        type:Number,
        required:true,
        ref:'Discount'
    },
    created_at:{
        type:timestamp,
        required:true,
    },
    modified_at:{
        type:timestamp,
        required:true,
    },
    deleted_at:{
        type:timestamp,
        required:true,
    },
});

const product_category = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    created_at:{
        type:timestamp,
        required:true,
    },
    modified_at:{
        type:timestamp,
        required:true,
    },
    deleted_at:{
        type:timestamp,
        required:true,
    }
})

const product_inventory = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    quantity:{
        type:Number,
        required:true
    },
    created_at:{
        type:timestamp,
        required:true,
    },
    modified_at:{
        type:timestamp,
        required:true,
    },
    deleted_at:{
        type:timestamp,
        required:true,
    },
});

const discount= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    discount_percent:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    },
    created_at:{
        type:timestamp,
        required:true,
    },
    modified_at:{
        type:timestamp,
        required:true,
    },
    deleted_at:{
        type:timestamp,
        required:true,
    }
})


const ProductSchema = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model('ProductCategory',product_category);
const Inventory = mongoose.model('Inventory',product_inventory);
const Discount = mongoose.model('Discount',discount);

module.exports={ProductSchema,ProductCategory,Inventory,Discount}