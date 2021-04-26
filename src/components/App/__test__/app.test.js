import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import App from './../App';

afterEach(cleanup);

/* Se optó por realizar los test mediante click de interfaz construida ya que
la logica operacional de la calculadora no tiene definidas sus operaciones como una funcion 
******
Se pusieron a prueba todas las operaciones posibles, ademas de operaciones con mas de un operador

Este documento no genera una calculadora como el lab anterior, ya que en este caso ludwing me dijo 
que comentara las importaciones de css por problemas con JEST
*/


it("Prueba de valor inicial", () => {
    const {getByTestId} = render(<App/>)
    expect(getByTestId("valor")).toHaveTextContent("0")
})

it("Prueba de cambio de valor", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("2"))
    expect(getByTestId("valor")).toHaveTextContent("2")
})

it("prueba de reset de memoria", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("C"))
    expect(getByTestId("valor")).toHaveTextContent("0")

})

it("prueba de suma", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("4")

})

it("prueba de resta", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("0"))
    fireEvent.click(getByText("−"))
    fireEvent.click(getByText("3"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("7")

})

it("prueba de multiplicacion", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("8"))
    fireEvent.click(getByText("×"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("16")

})

it("prueba de division", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("9"))
    fireEvent.click(getByText("÷"))
    fireEvent.click(getByText("3"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("3")

})

it("prueba de cambio de signo", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("9"))
    fireEvent.click(getByText("±"))
    expect(getByTestId("valor")).toHaveTextContent("-9")

})

it("prueba de operacion porcentaje", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("0"))
    fireEvent.click(getByText("0"))
    fireEvent.click(getByText("%"))
    expect(getByTestId("valor")).toHaveTextContent("1")

})

it("prueba de punto decimal", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("."))
    fireEvent.click(getByText("3"))
    fireEvent.click(getByText("4"))
    expect(getByTestId("valor")).toHaveTextContent("1.34")

})

it("prueba de suma de multiples valores", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("+"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("6")
})

it("prueba de de multiples restas", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("1"))
    fireEvent.click(getByText("0"))
    fireEvent.click(getByText("−"))
    fireEvent.click(getByText("4"))
    fireEvent.click(getByText("−"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("4")

})

it("prueba de varias multiplicaciones", () => {
    const{getByTestId, getByText} = render(<App/>)
    fireEvent.click(getByText("4"))
    fireEvent.click(getByText("×"))
    fireEvent.click(getByText("3"))
    fireEvent.click(getByText("×"))
    fireEvent.click(getByText("2"))
    fireEvent.click(getByText("="))
    expect(getByTestId("valor")).toHaveTextContent("24")

})