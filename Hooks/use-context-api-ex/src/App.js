import React, { Profiler, useState } from 'react';
import './App.css';
import { globalContext } from "./context/context";
import Profile from "./components/profile";
import Login from "./components/Login";

function App() {
  const [username,setUserName] = useState("");
  const [profile,setProfile] = useState(false);
  return (
      <React.Fragment>
          <globalContext.Provider value={{username,setUserName,profile,setProfile}}>
                {profile ? <Profile></Profile> : <Login></Login>}
          </globalContext.Provider>
      </React.Fragment>
  );
}

export default App;
