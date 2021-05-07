import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from './types'

// Fetch All Logs
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

// Add Log
export const addLog = log => async dispatch => {
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

// Update Log
export const updateLog = log => async dispatch => {
  try {
    setLoading()

    const res = await fetch(`./logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: UPDATE_LOG,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

// Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading()

    await fetch(`./logs/${id}`, {
      method: 'DELETE'
    })

    dispatch({
      type: DELETE_LOG,
      payload: id
    })

  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

// search logs
export const searchLogs = text => async dispatch => {
  try {
    setLoading()

    const res = await fetch(`/logs?q=${text}`)
    const data = await res.json()

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
}

// set Current
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

// set Current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

// SET LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
