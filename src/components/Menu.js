import React from 'react';
import '../assets/css/main-login.css';
import {BrowserRouter, Link} from "react-router-dom";                                           //installed library to make the routing easy

const Menu = () => {

    return(
        <div>
            <main>
                <nav className="navbar fixed-top navbar-light bg-light">
                    <Link className="navbar-brand" to="/AddAdmin">Add Teacher</Link>                        {/*Link is navigational Component to make links*/}
                    <Link className="navbar-brand custom-menu-item" to="/ViewAdmins">View Teachers</Link>
                    <Link className="navbar-brand custom-menu-item" to="/VotingPollResults">View Poll Results</Link>
                    <Link className="navbar-brand custom-menu-item" to="/Profile">Profile</Link>
                    <Link className="navbar-brand custom-menu-item" to="/EditAdminProfile">Edit Profile</Link>
                    <Link className="navbar-brand custom-menu-item" to="/SuperadminDashboard">Dashboard</Link>
                    <Link className="navbar-brand custom-menu-item" to="/">Logout</Link>
                </nav>
            </main>
        </div>
    )
};

export default Menu;