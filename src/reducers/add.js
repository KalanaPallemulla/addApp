import {
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAIL,
  GET_BLOG_FAIL,
  GET_BLOG_SUCCESS,
} from "../actions/types";

const initialState = {
  blogs: [],
  blog: null,
  isBlogLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: payload,
        isBlogLoading: false,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        blog: payload,
        isBlogLoading: false,
      };
    case GET_BLOGS_FAIL:
    case GET_BLOG_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
