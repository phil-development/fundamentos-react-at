import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Edit from "../pages/Edit";

const router = createBrowserRouter([
    {
        path: '/fundamentos-react-at',
        element: <Home />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/edit/:id',
        element: <Edit />
    },
    {
        path: '/details/:id',
        element: <Details />
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
};