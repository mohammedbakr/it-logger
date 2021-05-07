import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Preloader from '../layout/Preloader'
import Log from './Log'
import { getLogs } from '../../store/actions/logActions'

// import * as action from '../../store/actions'

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, [])

  if (loading || logs === null) {
    return <Preloader />
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {
        !loading && logs.length === 0
          ? <p className="center">No logs to show...</p>
          : logs.map(log => <Log key={log.id} log={log} />)
      }
    </ul>
  )
}

const mapStateToProps = state => ({
  log: state.log,
})

// const mapDispatchToProps = dispatch => ({
//   getLogs: () => dispatch(action.getLogs())
// })

export default connect(mapStateToProps, { getLogs })(Logs)
