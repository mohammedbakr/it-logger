import { useEffect, useState } from 'react'
import M from 'materialize-css'
import { connect } from 'react-redux'

import * as action from '../../store/actions'

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmitHandler = () => {
    if (!message.trim() || !tech) {
      M.toast({ html: 'Please enter a message and tech' })
    } else {
      const log = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      }
      updateLog(log)

      M.toast({ html: `Log updated by ${tech}` })
      // clear fields
      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id="edit-log-modal"
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
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
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

const mapStateTpProps = state => ({
  current: state.log.current
})

const mapDispatchtoProps = dispatch => ({
  updateLog: (log) => dispatch(action.updateLog(log))
})

export default connect(mapStateTpProps, mapDispatchtoProps)(EditLogModal)
