import axios from "axios";
import {
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAIL,
  GET_BLOG_FAIL,
  GET_BLOG_SUCCESS,
} from "./types";

export const createAdd = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-add`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allAdds = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API}/adds`);
    console.log(res.data);
    dispatch({
      type: GET_BLOGS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_BLOGS_FAIL,
      payload: err,
    });
  }
};

export const postedHotels = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/posted-adds`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteAdd = async (token, addId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-add/${addId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const read = async (addId) =>
  await axios.get(`${process.env.REACT_APP_API}/add/${addId}`);
