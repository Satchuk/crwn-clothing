import { compose,createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import { RootReducer } from "./root-reducer";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const Store = createStore(RootReducer,undefined,composeEnhancers);