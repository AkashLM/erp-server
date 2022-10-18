const { Router } = require('express');
const express=require('express');
const {AddInventory} = require('../Controllers/AddNewInventory');
const {FetchDetails}= require ('../Controllers/FetchDetails');
const {LatestInventory}= require("../Controllers/LatestInventory");
const {FindByProductCode}=require("../Controllers/FindByProductCode");
const {FindExistingUser}=require("../Controllers/FindExistingUser");
const {AddNewProducts}=require("../Controllers/AddNewProducts");
const {FindByProductPrice}= require("../Controllers/ProductPrice");


const Router1= express.Router();
const Router2= express.Router();
const Router3= express.Router();
const Router4=express.Router();
const Router5=express.Router();
const Router6=express.Router();
const Router7=express.Router();

Router1.route('/CreateInventory').post(AddInventory);
Router2.route('/GetAllInventories').post(FetchDetails);
Router3.route('/InventorySerialNumber').get(LatestInventory);
Router4.route('/FindProduct').get(FindByProductCode);
Router5.route('/FindCustomer').get(FindExistingUser);
Router6.route('/AddNewProduct').post(AddNewProducts);
Router7.route('/ProductPrice').post(FindByProductPrice);
module.exports={
    Router1,
    Router2,
    Router3,
    Router4,
    Router5,
    Router6,
    Router7,
}