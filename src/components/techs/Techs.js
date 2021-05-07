import React, { useEffect, useState } from 'react'
import Tech from './Tech'

const Techs = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTechs()
    // eslint-disable-next-line
  }, [])

  const fetchTechs = async () => {
    setLoading(true)

    const res = await fetch('/techs')
    const data = await res.json()

    setTechs(data)
    setLoading(false)
  }

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians List</h4>
        <ul className="collection">
          {
            !loading && techs.map(tech => <Tech key={tech.id} tech={tech} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default Techs
