import { render,screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../Mocks/RestaurantMock.json";

describe("RestaurantCard Component",()=>{
    it("should render restaurant card component with props",()=>{
        render(<BrowserRouter>
        <RestaurantCard restaurant={MOCK_DATA} /></BrowserRouter>);
        const heading= screen.getByRole("heading",{name:"Theobroma"});
        expect(heading).toBeInTheDocument();
       
    })})