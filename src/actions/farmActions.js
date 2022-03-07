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

const URL = process.env.REACT_APP_API_BASE_URL;

export const addFarmAction = (farm_data) => async (dispatch) => {

    const userData = JSON.parse(localStorage.getItem("farmUserInfo"));

    try {

        dispatch({
        type: ADD_FARMS_REQUEST,
        });

        const config = {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + userData.data.access_token,
        },
        };

        const { data } = await axios.post(URL + "/add-farm", farm_data, config);

        dispatch({
        type: ADD_FARMS_SUCCESS,
        payload: data,
        });

    } catch (error) {
        dispatch({
        type: ADD_FARMS_FAIL,
        payload: error.response.data,
    });
  }
};

export const getFarmAction = () => async (dispatch) => {

    try {
        dispatch({
        type: GET_FARMS_REQUEST,
        });

        const config = {
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        };

        const { data } = await axios.get(URL + "/get-farms", config);
        console.log("From Server: ",data)
        dispatch({
        type: GET_FARMS_SUCCESS,
        payload: data,
        });
    } catch (error) {
        dispatch({
        type: GET_FARMS_FAIL,
        payload: error.response.data,
        });
    }
};

export const getFarmDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FARM_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };

    const { data } = await axios.get(URL + "/get-farm/"+id, config);

    dispatch({
      type: GET_FARM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_FARM_FAIL,
      payload: error.response.data,
    });
  }
};