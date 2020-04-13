import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_POST_FAIL,
  ADD_POST_SUCCESS,
  EDIT_POST_FAIL,
  EDIT_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_ONE_POST,
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST_FAIL,
} from "../constants/action.type";
const initialState = {
  isloading: false,
  errors: [],
  posts: [],
  isAuth: false,
  post: null,
  onepost: null,
  editedpost: null,
};
const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        isloading: true,
      };
    case ADD_POST_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        isloading: false,
        post: payload,
      };
    case DELETE_POST:
      return {
        ...state,
        isloading: true,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        post: payload,
      };
    case EDIT_POST:
      return {
        ...state,
        isloading: true,
      };
    case EDIT_POST_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        editedpost: payload,
      };

    case GET_POST:
      return {
        ...state,
        isloading: true,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isloading: false,
        posts: payload,
      };
    case GET_ONE_POST:
      return {
        ...state,
        isloading: true,
      };
    case GET_ONE_POST_FAIL:
      return {
        ...state,
        isloading: false,
        errors: payload,
      };
    case GET_ONE_POST_SUCCESS:
      return {
        ...state,
        isloading: false,
        onepost: payload,
      };
    default:
      return state;
  }
};
export default postReducer;
