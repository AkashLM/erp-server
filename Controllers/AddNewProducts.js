const { default: mongoose } = require("mongoose");
const {ProductModel}= require("../Schemas/mongoose.ProductCodesSchemas");
const AddNewProducts=async (req,res)=>{
    const {ProductCode,ProductName,ProductPrice}=req.body;
 try{
    const NewProduct=await ProductModel.create({
        ProductCode,
        ProductName,
        ProductPrice,
    });
    res.status(200).json({
        status: "Success",
        message: "Product created successfully !",
        Data: NewProduct,
      });
 }catch(Error){
    res.status(500).json({
        status: "Error",
        message: "Unable to create product !",
        Error: Error,
      });
      console.log(Error);
 }

}

module.exports={
    AddNewProducts,
}