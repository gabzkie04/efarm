import axios from "axios";
import {
  GET_FARMERS_REQUEST,
  GET_FARMERS_SUCCESS,
  GET_FARMERS_FAIL,
  GET_FARMER_REQUEST,
  GET_FARMER_SUCCESS,
  GET_FARMER_FAIL,
  GET_FARMERS_BY_FARM_REQUEST,
  GET_FARMERS_BY_FARM_SUCCESS,
  GET_FARMERS_BY_FARM_FAIL,
  GET_FARMERS_TOTAL_REQUEST,
  GET_FARMERS_TOTAL_SUCCESS,
  GET_FARMERS_TOTAL_FAIL,
} from "../constants/farmerConstants";

export const getFarmersTotalReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FARMERS_TOTAL_REQUEST:
      return { loading: true };

    case GET_FARMERS_TOTAL_SUCCESS:
      return { loading: false, success: action.payload };

    case GET_FARMERS_TOTAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFarmersByFarmReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FARMERS_BY_FARM_REQUEST:
      return { loading: true };

    case GET_FARMERS_BY_FARM_SUCCESS:
      return { loading: false, success: action.payload };

    case GET_FARMERS_BY_FARM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFarmersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FARMERS_REQUEST:
      return { loading: true };

    case GET_FARMERS_SUCCESS:
      return { loading: false, success: action.payload };

    case GET_FARMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFarmerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FARMER_REQUEST:
      return { loading: true };

    case GET_FARMER_SUCCESS:
      return { loading: false, success: action.payload };

    case GET_FARMER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};