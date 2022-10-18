const { InventoryModel } = require("../Schemas/mongoose.InventorySchema");
const LatestInventory = async (req, res) => {
  try {
    const LatestInventory = await InventoryModel.findOne()
      .sort({ created_at: -1 })
      .exec();
    if (LatestInventory) {
      res.status(200).json({
        status: "Success",
        message: "Last Inventory found successfully !",
        Data: LatestInventory.InvoiceNo,
      });
    }
  } catch (Error) {
    res.status(500).json({
      status: "Error",
      message: "Unable to find last Inventory !",
      Error: Error,
    }); 
  }
};
module.exports = {
  LatestInventory,
};
