import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userRedux';
import productReducer from './productRedux';
import transactionsReducer from "./transactionsRedux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

//product reducer doesnt have to be stored here; I chose to store here
const rootReducer = combineReducers({ user: userReducer, product: productReducer, transaction: transactionsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
