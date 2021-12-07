var DataTypes = require("sequelize").DataTypes;
var _adminaccounts = require("./adminaccounts");
var _admininfos = require("./admininfos");
var _bills = require("./bills");
var _carts = require("./carts");
var _comments = require("./comments");
var _orders = require("./orders");
var _productbrands = require("./productbrands");
var _products = require("./products");
var _useraccounts = require("./useraccounts");
var _userinfos = require("./userinfos");

function initModels(sequelize) {
  var adminaccounts = _adminaccounts(sequelize, DataTypes);
  var admininfos = _admininfos(sequelize, DataTypes);
  var bills = _bills(sequelize, DataTypes);
  var carts = _carts(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var productbrands = _productbrands(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var useraccounts = _useraccounts(sequelize, DataTypes);
  var userinfos = _userinfos(sequelize, DataTypes);

  admininfos.belongsTo(adminaccounts, { as: "Account_adminaccount", foreignKey: "Account"});
  adminaccounts.hasMany(admininfos, { as: "admininfos", foreignKey: "Account"});
  orders.belongsTo(bills, { as: "Bill_bill", foreignKey: "Bill"});
  bills.hasMany(orders, { as: "orders", foreignKey: "Bill"});
  products.belongsTo(productbrands, { as: "IDBrand_productbrand", foreignKey: "IDBrand"});
  productbrands.hasMany(products, { as: "products", foreignKey: "IDBrand"});
  bills.belongsTo(products, { as: "Product", foreignKey: "ProductID"});
  products.hasMany(bills, { as: "bills", foreignKey: "ProductID"});
  carts.belongsTo(products, { as: "Product", foreignKey: "ProductID"});
  products.hasMany(carts, { as: "carts", foreignKey: "ProductID"});
  comments.belongsTo(products, { as: "Product", foreignKey: "ProductID"});
  products.hasMany(comments, { as: "comments", foreignKey: "ProductID"});
  adminaccounts.belongsTo(userinfos, { as: "Account_userinfo", foreignKey: "Account"});
  userinfos.hasOne(adminaccounts, { as: "adminaccount", foreignKey: "Account"});
  carts.belongsTo(userinfos, { as: "User", foreignKey: "UserID"});
  userinfos.hasMany(carts, { as: "carts", foreignKey: "UserID"});
  orders.belongsTo(userinfos, { as: "User", foreignKey: "UserID"});
  userinfos.hasMany(orders, { as: "orders", foreignKey: "UserID"});
  useraccounts.belongsTo(userinfos, { as: "Account_userinfo", foreignKey: "Account"});
  userinfos.hasOne(useraccounts, { as: "useraccount", foreignKey: "Account"});

  return {
    adminaccounts,
    admininfos,
    bills,
    carts,
    comments,
    orders,
    productbrands,
    products,
    useraccounts,
    userinfos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
