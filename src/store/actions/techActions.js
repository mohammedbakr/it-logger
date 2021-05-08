import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR
} from './types'

// Fetch All Techs
export const getTechs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}

// Add Tech
export const addTech = tech => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_TECH,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}

// Delete Tech
export const deleteTech = id => async dispatch => {
  try {
    setLoading()

    await fetch(`./techs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: DELETE_TECH,
      payload: id
    })

  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    })
  }
}
// SET LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
