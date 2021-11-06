import React from "react";
import { useField, ErrorMessage } from "formik";
const TextField = ({label,...props})=>{
    const [field,meta] = useField(props);
    return(
        <React.Fragment>
            <div className="mb-2">
                <label>{label}</label>
                <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
                                    {...props} 
                                    {...field} 
                                    autoComplete="off">
                    
                </input>
                
                <ErrorMessage 
                        component="div" 
                        name={field.name} 
                        className="error" />
            </div>
        </React.Fragment>
    )
};
export default TextField;