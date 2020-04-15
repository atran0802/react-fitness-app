import React, {useState} from 'react';
import WatchDisplay from '../WatchDisplay';
import WatchBtn from '../WatchBtn';

function Stopwatch() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

// Adding time parameters//  
  const run = () => {
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

// Not started = 0 //
// Started = 1 //
// Stopped = 2 // 

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();

  return (
    <div className="stopwatch">
      <WatchDisplay time={time}/>
      <WatchBtn status={status} start={start} stop={stop} resume={resume} reset={reset} />
    </div>
  );
}

export default Stopwatch;