import React from 'react'
import './Popup.css'

function Popup1(props) {
    const close = () => {
        props.setTrigger(false)
    }
  return (props.trigger)? (
    <div className="popup">
        <div className="popup-inner">
            {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button> */}
            <button className="close-btn" onClick={close}>Close</button>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default Popup1