import App from "../layout/App";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import {createBrowserRouter } from "react-router-dom";
import Register from "../pages/register/Register";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <App/>,
        children:  [
            {path: '', element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'register', element: <Register/>},
        ]
    }
])

