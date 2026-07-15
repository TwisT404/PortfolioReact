import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Tools from "../views/Tools";
import App from "../views/App";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tools",
        element: <Tools />,
      }
        
      
    ]
  }
]);
