import * as Types from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case Types.GET_USERS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.SEARCH_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.SEARCH_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case Types.SEARCH_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.FILTER_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.FILTER_USER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case Types.FILTER_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.GET_SINGLE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_SINGLE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case Types.GET_SINGLE_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.REMOVE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.REMOVE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      };
    }
    case Types.REMOVE_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.UPDATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case Types.UPDATE_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.ADD_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.ADD_USER_SUCCESS: {
      return {
        ...state,
        users: [action.payload],
        loading: false,
      };
    }
    case Types.ADD_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
