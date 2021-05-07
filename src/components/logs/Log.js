import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import M from 'materialize-css'

import * as action from '../../store/actions'

const Log = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id)

    M.toast({ html: 'Log deleted successfully' })
  }
  return (
    <li className="collection-item">
      <div style={{marginBottom: '15px'}}>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{' '}
          <span className="black-text">{log.tech}</span> on <Moment format="MMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button className="secondary-content btn-floating waves-effect waves-light red" onClick={onDelete}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </li>
  )
}

Log.prototype = {
  log: PropTypes.object.isRequired,
}

const mapdispatchToProps = dispatch => ({
  deleteLog: (id) => dispatch(action.deleteLog(id)),
  setCurrent: (log) => dispatch(action.setCurrent(log))
})

export default connect(null, mapdispatchToProps)(Log)
