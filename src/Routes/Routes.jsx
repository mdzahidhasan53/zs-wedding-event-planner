import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Details from "../pages/Details/Details";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/services",
                element: <Services></Services>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/contact",
                element: <PrivateRoutes><Contact></Contact></PrivateRoutes>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/service/:id",
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch('../services.json')
            }
        ]
    },
]);
export default router;