import React, { useEffect, useState } from 'react'
import Preloader from '../layout/Preloader'
import Log from './Log'

const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchLogs()
    // eslint-disable-next-line
  }, [])

  const fetchLogs = async () => {
    setLoading(true)

    const res = await fetch('/logs')
    const data = await res.json()

    setLogs(data)
    setLoading(false)
  }

  if (loading) {
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

export default Logs
