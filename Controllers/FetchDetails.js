const {InventoryModel} =require("../Schemas/mongoose.InventorySchema");
const FetchDetails =async(req,res)=>{
   try{
        const FetchedData= await InventoryModel.find();
        if(FetchedData){
            res.status(200).json({
                status: "Success",
                message: "All inventory data has been fetched successfully !",
                Data: FetchedData,
              });
        }

   }catch(Error){
    res.status(500).json({
        status: "Error",
        message: "Unable to fetched inventory !",
        Error: Error,
      });
   }
}

module.exports={
    FetchDetails,
}