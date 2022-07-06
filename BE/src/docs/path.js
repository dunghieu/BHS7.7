const users = require("./users");
const products = require("./products");

module.exports = {
  paths: {
    "/login": {
      ...users.login,
    },
    "/register": {
      ...users.register,
    },
    "/add-new-product": {
      ...products.createProduct,
    },
    "/products": {
      ...products.getProducts,
    },
    "/delete-product/{id}": {
      ...products.deleteProduct,
    },
    "/edit-product/{id}": {
      ...products.updateProduct,
    },
    "/product/{id}": {
      ...products.getProduct,
    },
    "/product/{id}/reviews": {
      ...products.createReview,
    },
  },
};
