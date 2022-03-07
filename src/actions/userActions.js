import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
} from "../constants/userConstants";

const URL = process.env.REACT_APP_API_BASE_URL;

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      URL + "/login",
      { email: email, password: password },
      config
    );
    localStorage.setItem("farmUserInfo", JSON.stringify(data));

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("farmUserInfo");
  dispatch({ type: USER_LOGOUT });
  // dispatch({ type: USER_LIST_RESET });
};

export const register =
  (user) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
        },
      };

      const response = await axios.post(URL + "/register", user, config);
      console.log(response.data)
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data,
      });
      // localStorage.setItem('farmUserInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data,
      });
    }
};

export const profile = () => async (dispatch) => {
  
  const userData = JSON.parse(localStorage.getItem("farmUserInfo"));

  try {
    dispatch({
      type: USER_PROFILE_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + userData.data.access_token,
      },
    };

    const { data } = await axios.get(
      URL + "/profile",
      config
    );

    dispatch({
      type: USER_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
