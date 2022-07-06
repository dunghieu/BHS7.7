import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.get("/api/products", config);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
    localStorage.setItem("productInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };

    const { data } = await axios.get(`/api/product/${id}`, config);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, comment, rating, user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      };
      console.log(productId, comment, rating);
      const { data } = await axios.post(
        `/api/product/${productId}/reviews`,
        { comment, rating, user },
        config
      );

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
        payload: data,
      });
      localStorage.setItem("productInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const addProduct =
  (name, price, description, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();
      console.log(userInfo.user.token);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      };
      let user;
      if (userInfo.user) {
        user = userInfo.user._id;
      } else {
        user = userInfo._id;
      }
      const { data } = await axios.post(
        `/api/add-new-product`,
        { user, name, price, description, category },
        config
      );
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
      localStorage.setItem("productInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const editProduct =
  (productId, name, price, description, category) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_EDIT_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.user.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/edit-product/${productId}`,
        { productId, name, price, description, category },
        config
      );
      dispatch({
        type: PRODUCT_EDIT_SUCCESS,
        payload: data,
      });
      // localStorage.setItem("productInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: PRODUCT_EDIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.user.token}`,
      },
    };
    const { data } = await axios.delete(
      `/api/delete-product/${productId}`,
      config
    );
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
    });
    localStorage.setItem("productInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
