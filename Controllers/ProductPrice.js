const { ProductModel } = require("../Schemas/mongoose.ProductCodesSchemas");
const FindByProductPrice = async (req, res) => {
  try {
    const FetchDetails = await ProductModel.findOne({
      ProductName: { $regex: req.body.ProductName, $options: 'i' }
    }).exec();
    if (FetchDetails) {
      res.status(200).json({
        status: "Success",
        message: "Product found successfully !",
        Data: FetchDetails,
      });
      console.log(req.body.ProductName);
    }
  } catch (Error) {
    res.status(500).json({
      status: "Error",
      message: "Unable to find product !",
      Error: Error,
    });

    console.log(Error);
  }
};
module.exports = {
  FindByProductPrice,
};
