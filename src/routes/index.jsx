import React from 'react'
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import App from '../App';
const RouteRoot = () => {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<App />} />
            </Routes>
        </Router>
    )
}

export default RouteRoot