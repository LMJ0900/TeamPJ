import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import userReducer from "@/components/users/service/user.slice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {
  key: "count",
  storage,
  whitelist: ["countState"],
};
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const userPersistConfig = {
    key: "user",
    storage,
    whitelist: ["userState"],
  };
  const boardPersistConfig = {
    key: "board",
    storage,
    whitelist: ["boardState"],
  };


const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const rootReducer = combineReducers({
  user: persistedUserReducer,
});