const { InventoryModel } = require("../Schemas/mongoose.InventorySchema");
const FindExistingUser = async (req, res) => {
  const ExistingUser = req.body.ExistingUser;
  try {
    const UserQuery = await InventoryModel.find().exec();
    if (UserQuery) {
      res.status(200).json({
        status: "Success",
        message: "User found successfully !",
        Data: UserQuery,
      });

    }
  } catch (Error) {
    res.status(500).json({
      status: "Error",
      message: "Unable to find user !",
      Error: Error,
    });
  }
};
module.exports = {
  FindExistingUser,
};
