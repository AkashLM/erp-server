const { ProductModel } = require("../Schemas/mongoose.ProductCodesSchemas");
const FindByProductCode = async (req, res) => {
  try {
    const FetchDetails = await ProductModel.find().exec();
    if (FetchDetails) {
      res.status(200).json({
        status: "Success",
        message: "Product found successfully !",
        Data: FetchDetails,
      });
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
  FindByProductCode,
};
