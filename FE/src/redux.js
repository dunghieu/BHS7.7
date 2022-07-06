import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  productReviewCreateReducer,
  productCreateReducer,
  productEditReducer,
  productDeleteReducer,
} from "./reducers/productReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productReviewCreate: productReviewCreateReducer,
  productNew: productCreateReducer,
  productList: productListReducer,
  productEdit: productEditReducer,
  productDelete: productDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const productInfoFromStorage = localStorage.getItem("productInfo")
  ? JSON.parse(localStorage.getItem("productInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  productLog: { productInfo: productInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
