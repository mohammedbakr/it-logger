import React from 'react'
import PropTypes from 'prop-types'

const Teck = ({ teck }) => {
  return (
    <li className="collection-item">
      <div>
        {teck.firstName} {teck.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}

Teck.prototype = {
  teck: PropTypes.object.isRequired,
}

export default Teck
