import productService from "../services/productService";

const addNewProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res
      .status(201)
      .json({ message: "Product created successfully", product });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    if (!products.length) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      return res.status(200).json({ message: "product found", products });
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

const productDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productService.getProduct(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productService.deleteProduct(id);
    if (!product) {
      res.status(404).json({ message: "product not found" });
    } else {
      return res.status(200).json({ message: "ERASED!", product });
    }
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productData = req.body;
  try {
    const product = await productService.updateProduct(id, productData);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "UPDATED!", product });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

const createReview = async (req, res) => {
  const id = req.params.id;
  const reviewData = req.body;
  try {
    const product = await productService.createReview(id, reviewData);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.status(201).json({ message: "Review added", data: product });
  } catch (e) {
    return res.status(400).json({ message: e });
  }
};

module.exports = {
  addNewProduct,
  getAllProducts,
  deleteProduct,
  productDetail,
  updateProduct,
  createReview,
};
