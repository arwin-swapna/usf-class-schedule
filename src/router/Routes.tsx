import App from "../layout/App";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import {createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <App/>,
        children:  [
            {path: '', element: <Home/>},
            {path: 'about', element: <About/>},
        ]
    }
])

