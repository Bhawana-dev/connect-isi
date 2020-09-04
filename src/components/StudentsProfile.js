import React, {Component} from 'react';
import profilePic from '../assets/images/icons/user.png';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import axios from "axios";
import Logo from '../assets/images/logo/applogo.png';
import jwt_decode from "jwt-decode";
//import '../assets/css/main.css';
class StudentsProfile extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:null
        }

    }

    async componentDidMount() {
        //let {id} = jwt_decode(sessionStorage.getItem('token'));
        let id = sessionStorage.getItem('token')
        console.log("id",id);
        const options = {
            method: "POST",
            body:JSON.stringify({
                id
            }),
            headers: {
                "Content-Type":'application/json'
            }
        }
        console.log("Fetched data is "+options.body.id)
        const response = await fetch('https://connect-isi.herokuapp.com/getuserbyid',options)
        const data = await response.json();
        this.setState({
            data: data[0]
        })
    }

    render(){
        console.log(this.state.data);
        return this.state.data?
            (
                <div>
                    {/*<Menu/>*/}
                    {/*// <!-- Header -->*/}
                    <header id="header" style={{height:"57px"}}>
                        <a className="logo" href="/SuperadminDashboard">
                            <img src={Logo} style={{width: "13em"}}/>
                        </a>
                        <nav>
                            <Link to="/StudentsDashboard"><a>Dashboard</a></Link>
                            <Link to="/StudentsProfile"><a>Profile</a></Link>
                            <Link to="/"><a>Logout</a></Link>
                            {/*<a href="#menu">Menu</a>*/}
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
                        <h1>My Profile</h1>
                    </div>

                    {/*// <!-- Main -->*/}
                    <section id="main" className="wrapper">
                        <div className="inner">
                            <div className="content">
                                <header>
                                    <h2>{this.state.data.f_name}</h2>
                                </header>
                                <div className="row">
                                    <div className="col-6 col-12-medium">

                                        {/*// <!-- Text -->*/}
                                        <img src={profilePic} style={{width: "56%"}}/><br/><br/><br/>
                                        <ul className="actions">

                                            <li><Link to="/EditStudentsProfile"><a className="button primary"><i className="fas fa-user-edit"></i>Edit
                                                Profile</a></Link></li>
                                            {/*// <!--                        <li><a href="#" class="button">Default</a></li>-->*/}
                                        </ul>

                                    </div>
                                    <div className="col-6 col-12-medium">

                                        <div className="row">
                                            <div className="col-4 col-12-small">
                                                <h3><b>First Name</b></h3>
                                                <h3><b>Last Name</b></h3>
                                                <h3><b>Username</b></h3>
                                                {/*<h3><b>Phone</b></h3>*/}
                                                <h3><b>Email</b></h3>
                                                {/*<h3><b>Address 1</b></h3>*/}
                                                {/*<h3><b>Address 2</b></h3>*/}
                                                {/*<h3><b>Zip</b></h3>*/}
                                                {/*<h3><b>Gender</b></h3>*/}
                                                <h3><b>Type</b></h3>
                                            </div>
                                            <div className="col-8 col-12-small">
                                                <h3>{this.state.data.f_name}</h3>
                                                <h3>{this.state.data.l_name}</h3>
                                                <h3>{this.state.data.u_name}</h3>
                                                {/*<h3>+1 514 654 9876</h3>*/}
                                                <h3>{this.state.data.email}</h3>
                                                {/*<h3>345 rue lissa, Montreal</h3>*/}
                                                {/*<h3>None</h3>*/}
                                                {/*<h3>H6C 5NW</h3>*/}
                                                {/*<h3>Female</h3>*/}
                                                <h3>Student</h3>
                                            </div>
                                        </div>
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
            ) :

            (<h1>LOADING</h1>)

    }

}

export default StudentsProfile;
