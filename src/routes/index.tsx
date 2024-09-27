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
        path: '/fundamentos-react-at/dashboard',
        element: <Dashboard />
    },
    {
        path: '/fundamentos-react-at/register',
        element: <Register />
    },
    {
        path: '/fundamentos-react-at/edit/:id',
        element: <Edit />
    },
    {
        path: '/fundamentos-react-at/details/:id',
        element: <Details />
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
};