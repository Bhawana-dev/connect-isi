import React, {Component} from 'react';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import teahersPic from "../assets/images/icons/user.png";
//import '../assets/css/main.css';
//import Logo from '../assets/images/logo/isiNewCapture2.PNG';
import Logo from '../assets/images/logo/applogo.png';
class VotingPollResults extends Component{

    constructor() {
        super();
    }
    render(){
        return (
            <div>
                {/*<Menu/>*/}
                {/*// <!-- Header -->*/}
                <header id="header" style={{height:"57px"}}>
                    <a className="logo" href="/SuperadminDashboard">
                        <img src={Logo} style={{width: "13em"}}/>
                    </a>
                    <nav>
                        <Link to="/SuperadminDashboard"><a>Dashboard</a></Link>
                        <Link to={"/AddAdmin"}><a>Add Teacher</a></Link>
                        <Link to="/ViewAdmins"><a>View Teachers</a></Link>
                        <Link to="/Profile"><a>Profile</a></Link>
                        <Link to="/"><a>Logout</a></Link>
                        {/*<a href="#menu">Menu</a>*/}
                    </nav>
                </header>

                {/*// <!-- Nav -->*/}
                <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="elements.html">Elements</a></li>
                        <li><a href="generic.html">Generic</a></li>
                    </ul>
                </nav>

                {/*// <!-- Heading -->*/}
                <div id="heading">
                    <h1>Voting Poll Results</h1>
                </div>

                {/*// <!-- Main -->*/}
                <section id="main" className="wrapper">
                    <div className="inner">
                        <div className="content">
                            <h2>Best Teacher</h2>
                            <div className="row">
                                <div className="col-4 col-12-medium">
                                    <div className="row">
                                        <img src={teahersPic} style={{width:"84%"}}/>
                                    </div>
                                </div>
                                <div className="col-8 col-12-medium">
                                    {/*<div className="row">*/}
                                    {/*    <div className="col-3 col-12-medium">*/}
                                            <h2><b style={{color:"#E21C21"}}>Raul Ramirez</b></h2>
                                            <h3><b>Speciality:</b> C++</h3>
                                            <h3><b>No. of votes:</b> 212</h3>
                                        {/*</div>*/}
                                        {/*<div className="col-9 col-12-medium">*/}
                                        {/*    <h3><b3></b3></h3>*/}
                                        {/*    <h3>C++</h3>*/}
                                        {/*    <h3>212</h3>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*// <!-- Footer -->*/}
                <footer id="footer">
                    <div className="inner">
                        <div className="content">
                            <section>
                                <h3>Contact Us</h3>
                                <p><li><a><i className="icon fas fa-map-marker"></i>&nbsp;&nbsp;Institut supérieur d'informatique
                                    2100 boul. de Maisonneuve Est, étage #4
                                    Montréal, Québec
                                    H2K 4S1</a></li><br/><li><a><i className="icon fas fa-phone-square"></i>&nbsp;&nbsp;+1 514 567 3254</a></li></p>
                            </section>
                            <section>
                                {/*<h4>Sem turpis amet semper</h4>*/}
                                {/*<ul className="alt">*/}
                                {/*    <li><a href="#">Dolor pulvinar sed etiam.</a></li>*/}
                                {/*    <li><a href="#">Etiam vel lorem sed amet.</a></li>*/}
                                {/*    <li><a href="#">Felis enim feugiat viverra.</a></li>*/}
                                {/*    <li><a href="#">Dolor pulvinar magna etiam.</a></li>*/}
                                {/*</ul>*/}
                            </section>
                            <section>
                                <h4>Reach us here</h4>
                                <ul className="plain">
                                    <li><a href="#"><i className="icon fa-twitter">&nbsp;</i>Twitter</a></li>
                                    <li><a href="#"><i className="icon fa-facebook">&nbsp;</i>Facebook</a></li>
                                    <li><a href="#"><i className="icon fa-instagram">&nbsp;</i>Instagram</a></li>
                                    <li><a href="#"><i className="icon fa-github">&nbsp;</i>Github</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="copyright">
                            &copy; Developed by Yolo team.
                        </div>
                    </div>
                </footer>

                {/*// <!-- Scripts -->*/}
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/js/browser.min.js"></script>
                <script src="assets/js/breakpoints.min.js"></script>
                <script src="assets/js/util.js"></script>
                <script src="assets/js/main.js"></script>
            </div>
        );
    }

}
export default VotingPollResults;
