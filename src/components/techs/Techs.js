import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Tech from './Tech'

import { getTechs } from '../../store/actions/techActions'

const Techs = ({ tech: { techs, loading }, getTechs }) => {

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

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

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(Techs)
