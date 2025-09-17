import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact"
describe("Contact Us  Component",()=>{ 

  test('should render contact component ', () => {
  render(<Contact/>);
  const heading = screen.getByRole("heading",{name:"Contact Us"});
   expect(heading).toBeInTheDocument();
})
it('should render 3 input fields', () => {
  render(<Contact/>);
  const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(3);
})
it('should render submit button', () => {
  render(<Contact/>);
  const buttonElement = screen.getByRole("button",{name:"Submit"});
    expect(buttonElement).toBeInTheDocument();
});
 })
