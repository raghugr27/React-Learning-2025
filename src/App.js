import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import ErrorElement from "./components/ErrorElement";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
const About = lazy(()=>import("./components/About"));

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
{element:<Suspense fallback={<h1>Loading...</h1>}>
  <About />
</Suspense>,path:"/about"},
{element:<Contact />,path:"/contact"}
,{element:<RestaurantMenu />,path:"/restaurant/:resId"}
    ]
   
  } 
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // JSX element
