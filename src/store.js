import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userProfileReducer,
} from "./reducers/userReducers";

import {
  addFarmReducer,
  getFarmsReducer,
  getFarmReducer,
} from "./reducers/farmReducers";

import {
  getFarmersReducer,
  getFarmerReducer,
  getFarmersByFarmReducer,
  getFarmersTotalReducer,
} from "./reducers/farmerReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,

  addFarm: addFarmReducer,
  getFarms: getFarmsReducer,
  getFarm: getFarmReducer,

  getFarmers: getFarmersReducer,
  getFarmer: getFarmerReducer,
  getFarmersByFarm: getFarmersByFarmReducer,
  getFarmersTotal: getFarmersTotalReducer,
});


const userInfoFromStorage = localStorage.getItem("farmUserInfo")
  ? JSON.parse(localStorage.getItem("farmUserInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;