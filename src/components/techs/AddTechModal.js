import { useState } from 'react'
import M from 'materialize-css'

import { addTech } from '../../store/actions/techActions'
import { connect } from 'react-redux'

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmitHandler = () => {
    if (!firstName.trim() || !lastName.trim()) {
      M.toast({ html: 'Please enter the first and last name' })
    } else {
      const tech = {
        firstName,
        lastName
      }
      addTech(tech)

      M.toast({ html: 'Tech added successfully' })
      // clear fields
      setLastName('')
      setFirstName('')
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Tech First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Tech Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          onClick={onSubmitHandler}
          className="modal-close waves-effect waves-green btn blue"
        >
          Enter
        </button>
      </div>
    </div>
  )
}

export default connect(null, { addTech })(AddTechModal)
