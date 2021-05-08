/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
} from "../actions/types"

const initialState = {
  techs: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      }
    case ADD_TECH:
      return {
        ...state,
        loading: false,
        techs: [...state.techs, action.payload]
      }
    case DELETE_TECH:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}