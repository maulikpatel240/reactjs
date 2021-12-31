import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import imageReducer from "../store/slices/imageSlice";
import clientReducer from "../store/slices/clientSlice";
import supplierReducer from "../store/slices/supplierSlice";
import productReducer from "../store/slices/productSlice";
//-----------------------|| COMBINE REDUCER ||-----------------------//
const rootPersistConfig = {
  key: "root",
  timeout: 500,
  storage,
  // blacklist: ["message", "image", 'isView']
};

const reducer = combineReducers({
  auth: persistReducer(
    {
      key: "auth",
      storage,
      keyPrefix: "salon-",
      debug: false,
      timeout: 20000,
    },
    authReducer,
  ),
  message: messageReducer,
  client: persistReducer(
    {
      key: "client",
      storage,
      keyPrefix: "salon-",
      debug: false,
      timeout: 20000,
      whitelist:['isTabView']
    },
    clientReducer,
  ),
  product: persistReducer(
    {
      key: "product",
      storage,
      keyPrefix: "salon-",
      debug: false,
      timeout: 20000,
      whitelist:['isTabView']
    },
    productReducer,
  ),
  supplier: persistReducer(
    {
      key: "supplier",
      storage,
      keyPrefix: "salon-",
      debug: false,
      timeout: 20000,
      whitelist:['isTabView']
    },
    supplierReducer,
  ),
  image: imageReducer,
});

export default reducer;
