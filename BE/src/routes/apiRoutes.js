import express from "express";
import authController from "../controllers/authController";
import productController from "../controllers/productController";
import { auth } from "../middleware/auth";
import validate from "../middleware/validate";
import authValidation from "../validation/authValidation";
import productValidation from "../validation/productValidation";

const router = express.Router();

const apiRoutes = (app) => {
  router.post(
    "/register",
    validate(authValidation.register),
    authController.register
  );
  router.post("/login", validate(authValidation.login), authController.login);

  router
    .route("/products")
    .post(
      validate(productValidation.createProduct),
      productController.addNewProduct
    )
    .get(productController.getAllProducts);

  router
    .route("/products/:id")
    .delete(
      validate(productValidation.deleteProduct),
      productController.deleteProduct
    )
    .put(
      validate(productValidation.updateProduct),
      productController.updateProduct
    )
    .get(
      validate(productValidation.getProduct),
      productController.productDetail
    );

  router.post(
    "/products/:id/review",
    validate(productValidation.createReview),
    productController.createReview
  );

  return app.use("/api", router);
};

export default apiRoutes;
