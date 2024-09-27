import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Edit from "../pages/Edit";

export default function AppRoutes() {
    return (

        <Router basename="/fundamentos-react-at">

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/details/:id" element={<Details />} />

            </Routes>

        </Router>

    );
};