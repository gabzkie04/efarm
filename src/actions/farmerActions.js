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

const URL = process.env.REACT_APP_API_BASE_URL;

export const getTotalFarmerAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_FARMERS_TOTAL_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };

    const { data } = await axios.get(URL + "/get-total-farmers", config);

    dispatch({
      type: GET_FARMERS_TOTAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_FARMERS_TOTAL_FAIL,
      payload: error.response.data,
    });
  }
};

export const getFarmerByFarmAction = (farm_id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FARMERS_BY_FARM_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };

    const { data } = await axios.get(
      URL + "/get-farmers-by-farm/" + farm_id,
      config
    );

    dispatch({
      type: GET_FARMERS_BY_FARM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_FARMERS_BY_FARM_FAIL,
      payload: error.response.data,
    });
  }
};

export const getFarmerAction = () => async (dispatch) => {

    try {
        dispatch({
        type: GET_FARMERS_REQUEST,
        });

        const config = {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        };

        const { data } = await axios.get(URL + "/get-farmers", config);

        dispatch({
        type: GET_FARMERS_SUCCESS,
        payload: data,
        });
    } catch (error) {
        dispatch({
        type: GET_FARMERS_FAIL,
        payload: error.response.data,
        });
    }
};

export const getFarmerDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FARMER_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };

    const { data } = await axios.get(URL + "/get-farm/"+id, config);

    dispatch({
      type: GET_FARMER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_FARMER_FAIL,
      payload: error.response.data,
    });
  }
};