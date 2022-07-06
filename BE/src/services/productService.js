import Product from "../models/product";

const createProduct = (productData) => {
  const { user, name, price, description, category } = productData;
  return Product.create({
    user,
    name,
    price,
    description,
    category,
  });
};

const getAllProducts = () => {
  return Product.find({});
};

const getProduct = (productId) => {
  return Product.findById(productId);
};

const deleteProduct = (productId) => {
  return Product.findByIdAndRemove(productId);
};

const updateProduct = async (productId, productData) => {
  const { name, price, description, category } = productData;
  const product = await Product.findById(productId);
  if (!product) {
    return product;
  } else {
    product.name = name;
    product.price = price;
    product.description = description;
    product.category = category;
    await product.save();
    return product;
  }
};

const createReview = async (productId, reviewData) => {
  const product = await Product.findById(productId);
  const { rating, comment, user } = reviewData;
  const alreadyReviewed = product.reviews.find(
    (r) => r.user.toString() === user.user._id.toString()
  );
  if (alreadyReviewed) {
    throw "Product already reviewed";
  }
  if (product) {
    const review = {
      name: user.user.email,
      rating: Number(rating),
      comment,
      user: user.user._id,
    };
    product.reviews.push(review);

    product.totalReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    return product;
  } else {
    return product;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createReview,
};
