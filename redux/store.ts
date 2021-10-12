import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticketsSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, ticketReducer);

const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

// AsyncStorage.clear();

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
