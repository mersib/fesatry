import {
  USER_LOADING,
  USER_RETURN_MSG,
  USER_CHANGE_VALUE,
  LOGIN,
  SOCIAL_FB_LOGIN,
  LOGOUT,
  SIGNUP
} from "./actions/userActionTypes";

const initialState = {
  isLoading: false,
  message: "",
  id_token: "",
  sign_up: false,
  user_data: [],
  json_object: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case USER_RETURN_MSG:
      return {
        ...state,
        message: action.payload
      };
    case USER_CHANGE_VALUE:
      if (!action.payload.value) {
        return {
          ...state,
          json_object: {
            ...state.json_object,
            [action.payload.name]: null
          }
        };
      } else {
        return {
          ...state,
          json_object: {
            ...state.json_object,
            [action.payload.name]: action.payload.value
          }
        };
      }

    // Login
    case LOGIN:
      if (action.payload.length === 0) {
        localStorage.setItem("user_data", "");
      } else {
        localStorage.setItem("user_data", JSON.stringify(action.payload));
      }

      return {
        ...state,
        id_token: action.payload.id_token,
        user_data: action.payload.userData
      };

    // Social Login
    case SOCIAL_FB_LOGIN:
      var sub = "";
      var picture = "";

      if (action.payload.length === 0) {
        localStorage.setItem("user_data", "");
      } else {
        if (action.payload.googleId) {
          sub = action.payload.googleId;
          picture = action.payload.imageUrl;
        } else {
          sub = action.payload.userID;
          picture = action.payload.picture.data.url;
        }
        localStorage.setItem(
          "user_data",
          JSON.stringify({
            userData: {
              sub: sub,
              email: action.payload.email,
              picture: picture,
              name: action.payload.name
            },
            // id_token: state.id_token
            id_token: sub
          })
        );
      }
      return {
        ...state,
        user_data: {
          sub: sub,
          email: action.payload.email,
          picture: picture,
          name: action.payload.name
        },
        id_token: sub
      };

    // SignUp
    case SIGNUP:
      return {
        ...state
      };

    // Logout
    case LOGOUT:
      localStorage.setItem("user_data", "");

      return {
        ...state,
        user_data: [],
        id_token: ""
      };
    default:
      return state;
  }
}
