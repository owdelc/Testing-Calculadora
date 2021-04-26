import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import Button from './../button';


it("Prueba de generacion de botones", () => {
    const mockFunction = jest.fn();
    render(<Button onButtonClick={mockFunction} content="C" type="function" />)
    expect(screen.findAllByText("C")).not.toBeNull() 
})

