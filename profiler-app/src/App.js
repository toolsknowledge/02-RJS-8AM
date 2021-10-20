import React,{ Profiler } from "react";
import './App.css';
import Demo from './Demo';
function App() {

  const my_fun = (id,phase,startTime,totalTime,a,b,c)=>{
      console.log( id, phase,startTime, totalTime);
  };

  return (
      <React.Fragment>
          <Profiler id="my_demo" onRender={my_fun}>
              <Demo props1="Hello_1" props2="Hello_2" props3="Hello_3"></Demo>
          </Profiler>
      </React.Fragment>
  );
}

export default App;
