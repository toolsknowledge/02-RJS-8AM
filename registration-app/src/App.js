import React from 'react';
import Signup from './components/Signup';
import logo from "./assets/images/logo.jpg";

function App() {
  return (
    <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
              <Signup></Signup>
              {/* Hello */}
          </div>
          <div className="col-md-7">
             <img src={logo}  className="img-fluid w-100"></img>
          </div>
        </div>
    </div>
  );
}

export default App;
