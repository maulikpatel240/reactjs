import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./reducer";
import { Navigate } from 'react-router-dom';
import storage from 'redux-persist/lib/storage';

const actionMiddleware = (store) => (next) => (action) => {
  // store.dispatch({ type: "client/view/reset" })
  if(action.payload && action.payload.status && action.payload.status == 401){
    // storage.removeItem(`salon-auth`);
    // storage.removeItem(`salon-client`);
    persistStore(store).purge();
  }
  if (action.type == "auth/logout/fulfilled") {
    persistStore(store).purge();
  }
  // store.dispatch({ type: "client/view/fulfilled" });
  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      // }
      serializableCheck: false,
    }).concat(actionMiddleware),
});

const persister = persistStore(store);

export { store, persister };
