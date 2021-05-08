import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import M from 'materialize-css'

import { deleteTech } from '../../store/actions/techActions'

const Tech = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id)

    M.toast({ html: 'Tech deleted successfully' })
  }

  return (
    <li className="collection-item">
      <div style={{marginBottom: '15px'}}>
        {tech.firstName} {tech.lastName}
        <button className="secondary-content btn-floating waves-effect waves-light red" onClick={onDelete}>
          <i className="material-icons">delete</i>
        </button>
      </div>
    </li>
  )
}

Tech.prototype = {
  tech: PropTypes.object.isRequired,
}

export default connect(null, { deleteTech })(Tech)
