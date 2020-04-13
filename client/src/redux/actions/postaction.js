import axios from "axios";
// const { ObjectID } = require("mongodb");
import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_POST_FAIL,
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  GET_POST,
  GET_ONE_POST,
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST_FAIL,
} from "../constants/action.type";

export const getallpost = (id) => async (dispatch) => {
  dispatch({
    type: GET_POST,
  });
  try {
    const postRes = await axios.get(`/profile/${id}/getAllPost`);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: postRes.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const getonepost = (id) => async (dispatch) => {
  dispatch({
    type: GET_POST,
  });
  try {
    const onepostRes = await axios.get(`/profile/${id}/edit`);
    dispatch({
      type: GET_ONE_POST_SUCCESS,
      payload: onepostRes.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_POST_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const addpost = (id, post) => async (dispatch) => {
  dispatch({
    type: ADD_POST,
  });
  try {
    const addResult = await axios.post(`/profile/${id}/add`, post);
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: addResult.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const editpost = (id, editedpost) => async (dispatch) => {
  dispatch({
    type: EDIT_POST,
  });
  try {
    const editResult = await axios.put(`/profile/${id}/edit`, editedpost);
    dispatch({
      type: EDIT_POST_SUCCESS,
      payload: editResult.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_POST_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const deletepost = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_POST,
  });
  try {
    const deleteResult = await axios.delete(`/profile/${id}/edit`);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: deleteResult.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response.data.errors,
    });
  }
};
