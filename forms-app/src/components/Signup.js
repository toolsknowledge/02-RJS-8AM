import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";

const Signup = ()=>{

    const validate = Yup.object({
        firstName : Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required')
                    .min(5,"minimum 5 characters are required")
                    ,
    })
    return(
        <React.Fragment>
            <div>
                <Formik initialValues={{firstName:""}}
                        validationSchema={validate}
                        onSubmit={(values)=>{console.log(values)}}>
                    <Form>
                        <h1>Signup</h1>
                        <TextField type="text"
                                    placeholder="first name"
                                    name="firstName"
                                    label="firstName"></TextField>

                        <button className="btn btn-primary btn-sm mt-5" type="submit">Register</button>
                    
                    
                    </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
};

export default Signup;