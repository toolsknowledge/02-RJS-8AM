import Button from "./../button";
import React from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";

it("check button will render or not",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div); 
});

it("check text availability",()=>{
    render(<Button label="click here"/>);
    const my_text = screen.getByText(/CLICK HERE/i);
    expect(my_text).toBeInTheDocument();
});

