import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import logger from "redux-logger";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
