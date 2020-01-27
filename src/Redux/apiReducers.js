import {
  API_LOADING,
  API_RETURN_MSG,
  API_CHANGE_VALUE,
  API_RESET,
  API_EDIT,
  CREATE_UPDATE,
  LIST,
  GET,
  SCAN
} from "./actions/apiActionTypes";

const initialState = {
  isLoading: false,
  message: "",
  inbox: "",
  json_object: {},
  post_data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case API_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case API_RETURN_MSG:
      return {
        ...state,
        message: action.payload
      };
    case API_CHANGE_VALUE:
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
    case API_RESET:
      return {
        ...state,
        json_object: {},
        post_data: []
      };
    case API_EDIT:
      return {
        ...state,
        json_object: state[action.payload]
      };

    // CREATE/UPDATE Data
    case CREATE_UPDATE:
      return {
        ...state,
        post_data: action.payload.data
      };

    // LIST Data
    case LIST:
      return {
        ...state,
        [action.payload.name]: action.payload.response.data
      };

    // GET Data
    case GET:
      return {
        ...state,
        [action.payload.name]: action.payload.response.data
      };

    // SCAN Data
    case SCAN:
      return {
        ...state,
        [action.payload.name]: action.payload.response.data
      };
    default:
      return state;
  }
}
