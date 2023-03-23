import axios from "axios";
import * as Types from "./actionTypes";

// Add user

const addUserRequest = () => ({
  type: Types.ADD_USER_REQUEST,
});

const addUserSuccess = (data) => ({
  type: Types.ADD_USER_SUCCESS,
  payload: data,
});

const addUserError = (error) => ({
  type: Types.ADD_USER_ERROR,
  payload: error,
});

// Search user

const searchUserRequest = () => ({
  type: Types.SEARCH_USER_REQUEST,
});

const searchUserSuccess = (data) => ({
  type: Types.SEARCH_USER_SUCCESS,
  payload: data,
});

const searchUserError = (error) => ({
  type: Types.SEARCH_USER_ERROR,
  payload: error,
});

// Filter user

const filterUserRequest = () => ({
  type: Types.FILTER_USER_REQUEST,
});

const filterUserSuccess = (data) => ({
  type: Types.FILTER_USER_SUCCESS,
  payload: data,
});

const filterUserError = (error) => ({
  type: Types.FILTER_USER_ERROR,
  payload: error,
});

// Get users

const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

const getUsersSuccess = (data) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: data,
});

const getUsersError = (error) => ({
  type: Types.GET_USERS_ERROR,
  payload: error,
});

// Get single user

const getSingleUserRequest = () => ({
  type: Types.GET_SINGLE_USER_REQUEST,
});

const getSingleUserSuccess = (user) => ({
  type: Types.GET_SINGLE_USER_SUCCESS,
  payload: user,
});

const getSingleUserError = (error) => ({
  type: Types.GET_SINGLE_USER_ERROR,
  payload: error,
});

// Update user

const updateUserRequest = () => ({
  type: Types.ADD_USER_REQUEST,
});

const updateUserSuccess = (data) => ({
  type: Types.ADD_USER_SUCCESS,
  payload: data,
});

const updateUserError = (error) => ({
  type: Types.ADD_USER_ERROR,
  payload: error,
});

// Remove user

const removeUserRequest = () => ({
  type: Types.REMOVE_USER_REQUEST,
});

const removeUserSuccess = (data) => ({
  type: Types.REMOVE_USER_SUCCESS,
  payload: data,
});

const removeUserEmail = (error) => ({
  type: Types.REMOVE_USER_ERROR,
  payload: error,
});

// Actions

export const loadUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      const res = await axios.get("http://localhost:5050/users");
      const data = res.data;
      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersError(error));
    }
  };
};

export const removeUser = (id) => {
  return async (dispatch) => {
    dispatch(removeUserRequest());
    try {
      const res = await axios.delete(`http://localhost:5050/users/${id}`);
      const data = res.data;
      dispatch(removeUserSuccess(data));
    } catch (error) {
      dispatch(removeUserEmail(error));
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    dispatch(addUserRequest());
    try {
      const res = await axios.post("http://localhost:5050/users", user);
      const data = res.data;
      dispatch(addUserSuccess(data));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
};

export const load_singleUser = (id) => {
  return async (dispatch) => {
    dispatch(getSingleUserRequest());
    try {
      const res = await axios.get(`http://localhost:5050/users/${id}`);
      const data = res.data;
      dispatch(getSingleUserSuccess(data));
    } catch (error) {
      dispatch(getSingleUserError(error));
    }
  };
};

export const updateUser = (user, id) => {
  return async (dispatch) => {
    dispatch(updateUserRequest());
    try {
      const res = await axios.put(`http://localhost:5050/users/${id}`, user);
      const data = res.data;
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserError(error));
    }
  };
};

export const searchUser = (query) => {
  return async (dispatch) => {
    dispatch(searchUserRequest());
    try {
      const res = await axios.get(`http://localhost:5050/users?q=${query}`);
      const data = res.data;
      dispatch(searchUserSuccess(data));
    } catch (error) {
      dispatch(searchUserError(error));
    }
  };
};

export const filteredUser = (filterQuery) => {
  return async (dispatch) => {
    dispatch(filterUserRequest());
    try {
      const res = await axios.get(
        `http://localhost:5050/users?address=${filterQuery}`
      );
      const data = res.data;
      dispatch(filterUserSuccess(data));
    } catch (error) {
      dispatch(filterUserError(error));
    }
  };
};
