import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-"
}

const rootReducer = combineReducers({

})

export { rootPersistConfig, rootReducer };