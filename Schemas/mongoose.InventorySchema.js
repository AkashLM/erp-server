const mongoose = require("mongoose");
const validator = require("validator");
const { MONGOOSE_CONNECTION } = process.env;
mongoose.connect(MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("Mongoose connection established");
});

//Custom schema for Inventory.
const InventorySchema = new mongoose.Schema({
  InvoiceNo: {
    type: String,
    unique: [true, "Inventory already exists !"],
    required: [true, "This is require field !"],
  },
  InvoiceDate: {
    type: Date,
    required: [true, "This is required field !"],
  },
  CustomerName: {
    type: String,
    required: [true, "This is required field !"],
    minlength: [1, "Required at least 1 character"],
    maxlength: [255, "Required at most 255 character"],
  },
  DeliveryType: {
    type: String,
    required: [true, "This is required field"],
  },
  ProductList: [
    {
      ProductCode: {
        type: String,
        required: [true, "This is required field"],
      },
      ProductName: {
        type: String,
        required: [true, "This is required field"],
      },
      ProductQty: {
        type: Number,
        required: [true, "This is required field"],
      },
      ProductPrice: {
        type: Number,
        required: [true, "This is required field"],
      },
      ProductTotalPrice: {
        type: Number,
        required: [true, "This is required field"],
      },
    },
  ],
  TotalAmount: {
    type: Number,
    required: [true, "This is required field"],
    minlength: 0,
  },

  CashAmount: {
    type: Number,
    minlength: [0, "Amount should not be negative"],
  },

  ChequeAmount: {
    type: Number,
    minlength: [0, "Amount should not be negative"],
  },
  ChequeDetails: {
    type: String,
    unique: [true, "Details should be unique"],
  },
  InventoryCreationDate: {
    type: String,
    required: true,
    unique: true,
  },
});
//Model creation...

const InventoryModel = mongoose.model("Inventory", InventorySchema);
module.exports = {
  InventoryModel,
};
