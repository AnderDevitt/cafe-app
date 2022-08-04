import React from 'react'
import './Popup.css'
import { useNavigate } from "react-router-dom";
// import { useGlobalState } from "../utils/stateContext"
import React from 'react';
// import { useState, useEffect } from 'react';

function Popup1(props) {

  // const {store, dispatch} = useGlobalState()
  // const {shiftList} = store
  const navigate = useNavigate()

  const close = () => {
      props.setTrigger(false)
      navigate("/shifts")
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