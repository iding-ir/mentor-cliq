import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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

import employeesReducer from "../features/employees/slice";
import authReducer from "../features/auth/slice";
import profileReducer from "../features/profile/slice";
import themesReducer from "../features/themes/slice";
import languagesReducer from "../features/languages/slice";
import pageReducer from "../features/pages/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  employees: employeesReducer,
  auth: authReducer,
  profile: profileReducer,
  themes: themesReducer,
  languages: languagesReducer,
  pages: pageReducer,
});

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

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
