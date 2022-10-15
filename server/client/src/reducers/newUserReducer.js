import { CREATE_USERS } from "../actions/type";

export default function (state = "", action) {
  if (action.type === "CREATE_USERS") {
    return action.payload;
  } else {
    return state;
  }
}
