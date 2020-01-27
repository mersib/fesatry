import axios from "axios";

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
} from "./apiActionTypes";

// const url = "http://127.0.0.1:8000/api";
// const url = "https://api.krossing.com/api";
const url = "https://o0nwrefwz6.execute-api.us-east-2.amazonaws.com/dev/api";

// Loading
export const isLoading = status => dispatch => {
  dispatch({
    type: API_LOADING,
    payload: status
  });
};

// Messages
export const returnMsg = msg => dispatch => {
  dispatch({
    type: API_RETURN_MSG,
    payload: msg
  });
};

// Dynamicly Adds new values and column into the Table
export const changeValue = (name, value) => dispatch => {
  dispatch({
    type: API_CHANGE_VALUE,
    payload: {
      name,
      value
    }
  });
};

// RESET Api
export const resetApi = () => dispatch => {
  dispatch({
    type: API_RESET
  });
};

// EDIT Api
export const editApi = table_name => dispatch => {
  dispatch({
    type: API_EDIT,
    payload: table_name
  });
};

// CREATE / UPDATE Data
export const createUpdateData = (
  data,
  table_name,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }

  var request = {};
  if (token) {
    request = {
      url: url + "/" + table_name + "/",
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      },
      data: data
    };
  } else {
    request = {
      url: url + "/" + table_name + "/",
      method: "POST",
      data: data
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: CREATE_UPDATE,
        payload: response
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};

// CREATE / UPDATE Data
export const editUpdateData = (
  data,
  table_name,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }

  var request = {};
  if (token) {
    request = {
      url: url + "/" + table_name + "/",
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token
      },
      data: data
    };
  } else {
    request = {
      url: url + "/" + table_name + "/",
      method: "PUT",
      data: data
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: CREATE_UPDATE,
        payload: response
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};

// List Data (url/table_name)
export const listData = (
  table_name,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading === true) {
    dispatch(isLoading(true));
  }

  var request = {};
  if (token) {
    request = {
      method: "GET",
      url: url + "/" + table_name + "/",
      headers: {
        Authorization: "Bearer " + token
      }
    };
  } else {
    request = {
      method: "GET",
      url: url + "/" + table_name + "/"
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: LIST,
        payload: {
          name: table_name,
          response
        }
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};

// GET DATA (url/link/params)
export const getData = (
  params,
  link,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }

  var request = {};
  if (token) {
    request = {
      method: "GET",
      url: `${url}/${link}/${params}/`,
      headers: {
        Authorization: "Bearer " + token
      }
    };
  } else {
    request = {
      method: "GET",
      url: `${url}/${link}/${params}/`
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: GET,
        payload: {
          name: link,
          response
        }
      });
      dispatch(isLoading(false));
      return response.status;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
      return err;
    });
};

// LIST SCAN DATA (url/link/params)
export const scanData = (
  params,
  link,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }
  var request = {};
  if (token) {
    request = {
      method: "GET",
      url: `${url}/${link}/${params}/`,
      headers: {
        Authorization: "Bearer " + token
      }
    };
  } else {
    request = {
      method: "GET",
      url: `${url}/${link}/${params}/`
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: SCAN,
        payload: {
          name: link,
          response
        }
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};

// Change Status PUT
export const putData = (
  params,
  link,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }
  var request = {};
  if (token) {
    request = {
      method: "PUT",
      url: `${url}/${link}/${params}/`,
      headers: {
        Authorization: "Bearer " + token
      }
    };
  } else {
    request = {
      method: "PUT",
      url: `${url}/${link}/${params}/`
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: SCAN,
        payload: {
          name: link,
          response
        }
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};

// SEARCH DATA (url/link/params)
export const searchData = (
  params,
  link,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }

  var request = {};
  if (token) {
    request = {
      method: "GET",
      url: `${url}/${link}?search=${params}`,
      headers: {
        Authorization: "Bearer " + token
      }
    };
  } else {
    request = {
      method: "GET",
      url: `${url}/${link}?search=${params}`
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: GET,
        payload: {
          name: link,
          response
        }
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};

// SEARCH DATA (url/link/params)
export const searchData2 = (
  params,
  link,
  token,
  stateLoading = true
) => dispatch => {
  if (stateLoading) {
    dispatch(isLoading(true));
  }

  var request = {};
  if (token) {
    request = {
      method: "GET",
      url: `${url}/${link}?search=${params}`,
      headers: {
        Authorization: "Bearer " + token
      }
    };
  } else {
    request = {
      method: "GET",
      url: `${url}/${link}?search=${params}`
    };
  }

  return axios(request)
    .then(response => {
      dispatch({
        type: GET,
        payload: {
          name: link + "2",
          response
        }
      });
      dispatch(isLoading(false));
      return response;
    })
    .catch(err => {
      dispatch(returnMsg(err));
      dispatch(isLoading(false));
    });
};
