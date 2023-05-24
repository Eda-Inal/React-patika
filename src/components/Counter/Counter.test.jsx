import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Counter from "./index";

describe("Counter Tests", () => {

let increaseBtn, decreaseBtn,count

beforeEach(() => {
  act(() => {
    render(<Counter />);
  });
 increaseBtn = screen.getByText("Increase");
decreaseBtn = screen.getByText("Decrease");
count = screen.getByText("0");
  

})






it("increase btn", () => {

  act(() => {
    userEvent.click(increaseBtn);
  });

  expect(count).toHaveTextContent("1");
});

it("decrease btn", () => {
  
    act(() => {
      userEvent.click(decreaseBtn);
    });
  
    expect(count).toHaveTextContent("-1");
  });


})

