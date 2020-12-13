import { useState } from 'react'
import M from 'materialize-css'

const AddLogModal = () => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [teck, setTeck] = useState('')

  const onSubmitHandler = () => {
    if (!message.trim() || !teck) {
      M.toast({ html: 'Please enter a message and teck' })
    } else {
      console.log([message, teck, attention])
      // clear fields
      setMessage('')
      setTeck('')
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal"
      className="modal"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="teck"
              value={teck}
              className="browser-default"
              onChange={e => setTeck(e.target.value)}
            >
              <option value="" disabled>select Technician</option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default AddLogModal
