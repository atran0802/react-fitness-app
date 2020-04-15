import React from 'react';

import '../App.css';

// Button function //
function WatchBtn(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="startBtn" onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopBtn" onClick={props.stop}>Stop</button>
          <button className="resetBtn" onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="resumetBtn" onClick={props.resume}>Resume</button>
          <button className="resetBtn" onClick={props.reset}>Reset</button>
        </div> : ""
      }   
    </div>
  );
}

export default WatchBtn;