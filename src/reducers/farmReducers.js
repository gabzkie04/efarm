import axios from "axios";
import {
  ADD_FARMS_REQUEST,
  ADD_FARMS_SUCCESS,
  ADD_FARMS_FAIL,
  GET_FARMS_REQUEST,
  GET_FARMS_SUCCESS,
  GET_FARMS_FAIL,
  GET_FARM_REQUEST,
  GET_FARM_SUCCESS,
  GET_FARM_FAIL,
} from "../constants/farmConstants";

export const addFarmReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FARMS_REQUEST:
      return { loading: true };

    case ADD_FARMS_SUCCESS:
      return { loading: false, success: action.payload };

    case ADD_FARMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFarmsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FARMS_REQUEST:
      return { loading: true };

    case GET_FARMS_SUCCESS:
      return { loading: false, success: action.payload };

    case GET_FARMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFarmReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FARM_REQUEST:
      return { loading: true };

    case GET_FARM_SUCCESS:
      return { loading: false, success: action.payload };

    case GET_FARM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};