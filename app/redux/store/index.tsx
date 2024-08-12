import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

import appReducer from "./reducers";
import { DispatchFunctionType } from "../../types/redux/store";

let middleware = [ thunkMiddleware.withExtraArgument({ axios }) ];

if(process.env.NODE_ENV === "development") {
  middleware.push(createLogger({ collapsed: true }));
};

const store: Store & { dispatch: DispatchFunctionType } = configureStore({
  reducer: appReducer,
  middleware
});

export default store;
