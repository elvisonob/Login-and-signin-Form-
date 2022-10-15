import { CREATE_USERS } from "./type";
import axios from "axios";

export const handleFormInput = (values) => async (dispatch) => {
  const res = await axios.post("/api/signup", values);
  dispatch({ type: CREATE_USERS, payload: res.data });
};
