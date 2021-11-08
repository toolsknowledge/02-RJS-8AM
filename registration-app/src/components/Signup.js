import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
const Signup = ()=>{

    const validate = Yup.object({
        firstName:Yup.string().max(10,"maximum 10 charcters are allowed").min(5,"minimum 5 characters are required").required("Required"),
        lastName:Yup.string().max(10,"maximum 10 characters are allowed").required("Required").matches(
            "^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )

    })


    return(
            <Formik initialValues={{firstName:""}}
                    validationSchema={validate}
                    onSubmit={(values)=>{
                        console.log(values)
                    }}>
                    <Form>
                        <TextField type="text"
                                placeholder="Enter First Name"
                                name="firstName"
                                label="firstName"></TextField>

                                
                        <TextField type="text"
                                placeholder="Enter Last Name"
                                name="lastName"
                                label="lastName"></TextField>

                        <button type="submit" className="btn btn-success btn-sm my-2">Register</button>
                    </Form>
            </Formik>
    )
};

export default Signup;