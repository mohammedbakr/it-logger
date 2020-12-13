import { useState } from 'react'
import M from 'materialize-css'

const AddTeckModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmitHandler = () => {
    if (!firstName.trim() || !lastName.trim()) {
      M.toast({ html: 'Please enter the first and last name' })
    } else {
      console.log([firstName, lastName])
      // clear fields
      setLastName('')
      setFirstName('')
    }
  }

  return (
    <div id="add-teck-modal" className="modal">
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
              Teck First Name
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
              Teck Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmitHandler}
          className="modal-close waves-effect waves-green btn blue"
        >
          Enter
        </a>
      </div>
    </div>
  )
}

export default AddTeckModal
