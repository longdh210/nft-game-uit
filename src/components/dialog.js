import React from 'react'
import '../styles/alertDialog.css'

function Dialog (props) {
  return (props.trigger)?(
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={()=>props.setTrigger(false)}>
          X
        </button>
        <div style={{"display":"flex", "flexDirection":'column'}}>{props.children}</div>
      </div>
    </div>
  ):'';
}

export default Dialog
