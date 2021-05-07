import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
} from './types'

// FOR ASYNC ACTIONS

// METHOD (1)
// export const getLogs = () => {
//    return async dispatch => {
//     setLoading()

//     const res = await fetch('/logs')
//     const data = res.json()

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//    }
// }

// METHOD (2)
export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

export const addLog = (log) => async dispatch => {
  try {
    setLoading()

    const res = await fetch('./logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

// SET LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
