import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ErrorElement from "./components/ErrorElement";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
//  Hello World with JS
// let heading = document.createElement("h1");
// heading.innerHTML = "Hello World with JS";
// let root = document.getElementById("root");
// root.appendChild(heading);

// Hello World with React
// let heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", {}, "Hello World with React"),
//   React.createElement("h2", {}, "This is a React Component"),
// ]);
// let root = ReactDOM.createRoot(document.getElementById("root1"));
// root.render(heading); // converts the React element to HTML and renders it to the DOM
// console.log("heading", heading);

// Inspecting React in Dev Console
// Open Dev Tools in your browser and type `React` to see if React is available.
// You can also type `ReactDOM` to check if ReactDOM is available.
// const jsxHeading =()=> (
//   <div>
//     <h1>Heading from JSX</h1>
//     <span>its an element</span>
//   </div>
// );
// const HeadingComponent = () => {
//   return (
//     <div>
//       {" "}
//       {jsxHeading()}
//       <h1>Heading from JSX Component</h1>
//     </div>
//   );
// };

// constans



const AppLayout =()=>{
  return(<div>
<Header />
<Outlet />
{/* <Footer /> */}
  </div>)
}
const appRouter=createBrowserRouter([
  { path:"/",     
    element:<AppLayout /> 
    ,errorElement:<ErrorElement />,
    children:[  
{element:<Body />,path:"/"},
{element:<About />,path:"/about"},
{element:<Contact />,path:"/contact"}
,{element:<RestaurantMenu />,path:"/restaurant/:resId"}
    ]
   
  } 
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // JSX element
