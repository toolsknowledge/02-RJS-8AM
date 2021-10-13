import React, { useEffect, useRef } from "react";
import Input from "./components/Input";


function App(){
    const uname = useRef();
    const upwd = useRef();
    const emailRef = useRef();
    const submitRef = useRef();

    useEffect(()=>{
        uname.current.focus();
    },[]);

    function unameFn(e){
      console.log(e);
      if(e.key == "Enter"){
        upwd.current.focus();
      }
    }

    function upwdFn(e){
        if(e.key == "Enter"){
          emailRef.current.focus();
        }
    }

    function uemailFn(e){

        if(e.key == "Enter"){
          submitRef.current.focus();
        }
    }

    function submitFn(e){
      console.log(uname.current.value,
                  upwd.current.value,
                  emailRef.current.value);
    }


    return(
       <React.Fragment>
            <Input type="text"
                   placeholder="Enter User Name"
                   ref={uname}
                   onKeyDown={unameFn}></Input>


            <br></br><br></br>
            <Input type="password"
                   placeholder="Enter Password"
                   ref={upwd}
                   onKeyDown={upwdFn}></Input>

            <br></br><br></br>
            <Input type="email"
                    placeholder="Enter Email"
                    ref={emailRef}
                    onKeyDown={uemailFn}></Input>

            <br></br><br></br>
            <Input type="submit"
                   placeholder=""
                   onKeyDown={submitFn}
                   ref={submitRef}></Input>
       </React.Fragment>
    )


}

export default App;