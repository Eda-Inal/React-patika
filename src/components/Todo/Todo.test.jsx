import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Todo from "./index"

describe("Todo testleri", () => {
let button,input;
 beforeEach(() => {
    act(() =>{
        render(<Todo/>)
    })

    button = screen.getByText("Add")
    input = screen.getByLabelText("Text");

 });

 test("Varsayılan olarak  verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);
expect(items.length).toEqual(3)


 });
 test('input ve buton dökümanda bulunmalı' , () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
 });
 test("İnputa string girilip butona basılınca listeye eklenmeli", () => {
  const name = "Mehmet"
    act(() => {
        
  
    userEvent.type(input, name);

        userEvent.click(button);   
    })

 

    expect(screen.getByText(name)).toBeInTheDocument()

 })


})
