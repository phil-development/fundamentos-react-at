import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/details/:id',
        element: <Details />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
};