import axios from "axios";
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
} from "../constants/farmerConstants";

const URL = process.env.REACT_APP_API_BASE_URL;

export const profile = (formData) => async (dispatch) => {
  const userData = JSON.parse(localStorage.getItem("farmUserInfo"));

  try {
    dispatch({
      type: ADD_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: "Bearer " + userData.data.access_token,
      },
    };

    const { data } = await axios.get(URL + "/add-post", formData, config);

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload: error.response.data,
    });
  }
};
