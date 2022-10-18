const {InventoryModel} = require("../Schemas/mongoose.InventorySchema");
const AddInventory =async(req,res)=>{
    const {InvoiceNo,InvoiceDate,CustomerName,DeliveryType,ProductList,TotalAmount,PaymentMethod}=req.body;
try{
    const InventoryResponse= await InventoryModel.create({
        InvoiceNo,
        InvoiceDate,
        CustomerName,
        DeliveryType,
        ProductList,
        TotalAmount,
        CashAmount:PaymentMethod?.CashAmount,
        ChequeAmount:PaymentMethod?.ChequeAmount,
        ChequeDetails:PaymentMethod?.ChequeDetails,
        InventoryCreationDate:PaymentMethod?.InventoryCreationDate,

    });
    if(InventoryResponse){
        res.status(200).json({
            status: 'success',
            message:"Inventory created successfully !"
         })
    }
    console.log("Inventory created successfully",InventoryResponse);
}catch(Error){
    res.status(500).json({
        status: 'Failed',
        message:"Unable to create Inventory !",
        Error:Error,
     })
     
}


        
}

module.exports={
    AddInventory,
}