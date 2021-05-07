/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_LOG,
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING
} from "../actions/types"

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      }
    case ADD_LOG:
      return {
        ...state,
        loading: false,
        logs: [...state.logs, action.payload]
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}