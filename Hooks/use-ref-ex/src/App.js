import React, { useRef, useState } from "react";
function App() {
  
  const uemail = useRef();
  const upassword = useRef();

  const [status,setStatus] = useState("");

  const login = ()=>{
     if(uemail.current.value == "hr@ashokit.in" && upassword.current.value == "ashokit"){
        setStatus("Login Success");
     }else{
      setStatus("Login Fail");
     }
  };

  return (
      <React.Fragment>
           <input type="email" ref={uemail}></input>
           <input type="password" ref={upassword}></input>
           <button onClick={login}>Login</button>
           <br></br>
           <h1>{status}</h1>
      </React.Fragment>
  );
}

export default App;
