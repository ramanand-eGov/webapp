import { createStore, applyMiddleware } from "redux"
import { combineReducers } from "redux";
import storeConfigs from "egov-ui-kit/redux/store"
import employeeReducer from "./reducer";
import screenConfigurationMiddleware from "mihy-ui-framework/ui-redux/screen-configuration/middlewares";
import screenConfiguration from "mihy-ui-framework/ui-redux/screen-configuration/reducer";


let { rootReducer, middlewares } = storeConfigs
middlewares = middlewares.concat(screenConfigurationMiddleware);

const store = createStore(combineReducers({
  ...rootReducer,
  employee: employeeReducer,
  screenConfiguration
}), applyMiddleware(...middlewares))

export default store
