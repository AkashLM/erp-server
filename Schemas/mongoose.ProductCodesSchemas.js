const mongoose = require("mongoose");

const ProductSchema= new mongoose.Schema({
    ProductCode:{
        type:String,
        unique:true,
        required:true,
        minlength:1,
        maxlength:500,
    },
    ProductName:{
        type:String,
        unique:true,
        required:true,
        minlength:1,
        maxlength:1000,
    },
    ProductPrice:{
        type:Number,
        required:true,
        minlength:1,
    }
});

const ProductModel= mongoose.model("ProductModel", ProductSchema);
module.exports={
    ProductModel,
};