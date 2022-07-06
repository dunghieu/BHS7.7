import Joi from "joi";
import { objectId } from "./custom";

const createProduct = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    id: Joi.string().required().custom(objectId),
  }),
};

const deleteProduct = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
  }),
};

const createReview = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    rating: Joi.number().required(),
    comment: Joi.string().required(),
    user: Joi.object().required(),
  }),
};

module.exports = {
  createProduct,
  getProduct,
  deleteProduct,
  updateUser,
  createReview,
};
