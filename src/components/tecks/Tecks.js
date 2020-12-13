import React, { useEffect, useState } from 'react'
import Teck from './Teck'

const Tecks = () => {
  const [tecks, setTecks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTecks()
    // eslint-disable-next-line
  }, [])

  const fetchTecks = async () => {
    setLoading(true)

    const res = await fetch('/tecks')
    const data = await res.json()

    setTecks(data)
    setLoading(false)
  }

  return (
    <div id="teck-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {
            !loading && tecks.map(teck => <Teck key={teck.id} teck={teck} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default Tecks
