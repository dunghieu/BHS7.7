const getProducts = require("./get-products");
const getProduct = require("./get-product");
const createProduct = require("./create-product");
const updateProduct = require("./update-product");
const deleteProduct = require("./delete-product");
const createReview = require("./update-product");

module.exports = {
  createProduct,
  createReview,
  deleteProduct,
  updateProduct,
  getProduct,
  getProducts,
};
