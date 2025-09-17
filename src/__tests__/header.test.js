import { screen,render, fireEvent, getByRole } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router";

describe('Header component', () => {
  
    it(("should render header component correctly with Login Button"), () => {
          render(<Provider store={appStore}><BrowserRouter>
    <Header/></BrowserRouter></Provider>);
const loginButton=screen.getByRole("button",{name:"Login"});
expect(loginButton).toBeInTheDocument();
    });
      it(("should render header component with Cart Item 0"), () => {
           render(<BrowserRouter><Provider store={appStore}>
    <Header/></Provider></BrowserRouter>);
       
const  cartItem=screen.getByText("Cart (0)Item")

expect(cartItem).toBeInTheDocument();
    })
     it(("verify login button click functionality"), () => {
          render(<Provider store={appStore}><BrowserRouter>
    <Header/></BrowserRouter></Provider>);
const loginButton=screen.getByRole("button",{name:"Login"});
expect(loginButton).toBeInTheDocument();
fireEvent.click(loginButton);
const logoutButton=screen.getByRole("button",{name:"Logout"});
expect(logoutButton).toBeInTheDocument();
    });
});
    it(("should have Home,About Us,Contact Us link"), () => {
          render(<Provider store={appStore}><BrowserRouter>
    <Header/></BrowserRouter></Provider>);      
const homeLink=screen.getByRole("link",{name:"Home"})
expect(homeLink).toBeInTheDocument();   
const contactLink=screen.getByRole("link",{name:"Contact Us"})
expect(contactLink).toBeInTheDocument();   
const aboutLink=screen.getByRole("link",{name:"About Us"})
expect(aboutLink).toBeInTheDocument();
fireEvent.click(aboutLink);
expect(window.location.pathname).toBe("/about");

    });