import React, {Component} from 'react';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import profilePic from "../assets/images/pic02.jpg";
import axios from "axios";
//import Logo from '../assets/images/logo/isiNewCapture2.PNG';
import Logo from "../assets/images/logo/isiNewCapture2.PNG";
import jwt_decode from "jwt-decode";
//import '../assets/css/main.css';
class AddAdmin extends Component{

    constructor() {
        super();
        this.state = {
            flag: '',
            message: '',
            firstname : '',
            lastname : '',
            email : '',
            username: '',
            password: '',
            type: 2, /*till here exists*/
            // phone : '',
            // address : '',
            // postalCode : '',
            // gender : '',
        }
    }
    handleSubmit = (e) =>{
        console.log("handleSubmit");
        const data = {
            f_name: this.state.firstname,
            l_name: this.state.lastname,
            email: this.state.email,
            u_name: this.state.username,
            u_pwd: this.state.password,
            u_type: 2
        }
        let action = axios.post('https://connect-isi.herokuapp.com/insertuser',data).then(response => {
            console.log("inside axios");
            if(response.status !== 200){
                console.log('Record does not Registered successfully.');
                this.setState({
                    message: 'Record does not Registered successfully.',
                    flag: '0'
                });
            }else {
                console.log("Record Registered Successfully.");
                this.setState({
                    message: 'Record Registered successfully.',
                    flag: '1'
                });
            }
        });
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div>
                {/*<Menu/>*/}
                {/*// <!-- Header -->*/}
                <header id="header">
                    {/*<a className="logo" href="index.html">Industrious</a>*/}
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
                    <h1>Add New Admin</h1>
                </div>

                {/*// <!-- Main -->*/}
                <section id="main" className="wrapper">
                    <div className="inner">
                        <div className="content">
                            <h2>Add details here</h2>
                            <form>
                                {/*<h4><b>Upload Picture</b></h4>*/}
                                {/*<input type="file" id="inputImage" name="photo"/><br/><br/>*/}

                                {/*<h4><b>Gender</b></h4>*/}
                                {/*<div onChange={this.onChange.bind(this)}>*/}
                                {/*    <input type="radio" id="male" name="gender" value="male"/>*/}
                                {/*        <label for="male">Male</label><br/>*/}
                                {/*    <input type="radio" id="female" name="gender" value="female"/>*/}
                                {/*        <label for="female">Female</label><br/>*/}
                                {/*    <input type="radio" id="other" name="gender" value="other"/>*/}
                                {/*        <label for="other">Other</label>*/}
                                {/*</div>*/}
                                <div className="row gtr-uniform">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="firstname" id="firstname" value={this.state.firstname}
                                               placeholder="FirstName" onChange={this.onChange.bind(this)}/>

                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="lastname" id="lastname" value={this.state.lastname}
                                               placeholder="LastName" onChange={this.onChange.bind(this)}/>

                                    </div>

                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="email" id="email" value={this.state.email} placeholder="Email"
                                               onChange={this.onChange.bind(this)}/>
                                    </div>

                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="username" id="username" value={this.state.username} placeholder="Username"
                                               onChange={this.onChange.bind(this)}/>
                                    </div>

                                    <div className="col-6 col-12-xsmall">
                                        <input type="password" name="password" id="password" value={this.state.password} placeholder="Password"
                                               onChange={this.onChange.bind(this)}/>
                                    </div>

                                    {/*<div className="col-6 col-12-xsmall">*/}
                                    {/*    <input type="tel" id="phone" name="phone" placeholder="Contact Number" value={this.state.phone}*/}
                                    {/*           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  onChange={this.onChange.bind(this)}/>*/}
                                    {/*</div>*/}

                                    {/*<div className="col-6 col-12-xsmall">*/}
                                    {/*    <input type="text" name="address" id="address" value={this.state.address} placeholder="Address"*/}
                                    {/*           onChange={this.onChange.bind(this)}/>*/}
                                    {/*</div>*/}

                                    {/*<div className="col-6 col-12-xsmall">*/}
                                    {/*    <input type="text" name="postalCode" id="postalcode" value={this.state.postalCode}*/}
                                    {/*           placeholder="PostalCode" onChange={this.onChange.bind(this)}/>*/}
                                    {/*</div>*/}


                                    {/*<div className="col-12">*/}
                                    {/*    <textarea name="textarea" id="textarea" placeholder="About Admin"*/}
                                    {/*              rows="6"></textarea>*/}
                                    {/*</div>*/}
                                    {/*// <!-- Break -->*/}
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><button type="button" className="primary" onClick={this.handleSubmit.bind(this)}>Add Admin</button></li>
                                            <li><input type="reset" value="Cancel"/></li>
                                        </ul>
                                    </div>
                                    <div className="col-12">
                                        <br/> {/* <i className="fas fa-times"></i> <i
                                            className="icon fa-check"></i>&nbsp;Record registered successfully.*/}
                                        <h6 style={{color: "#E21C21",fontSize: "1.2rem"}}>{this.state.message} </h6>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/*// <!-- Footer -->*/}
                <footer id="footer">
                    <div className="inner">
                        <div className="content">
                            <section>
                                <h3>Contact Us</h3>
                                <p>Institut supérieur d'informatique
                                    2100 boul. de Maisonneuve Est, étage #4
                                    Montréal, Québec
                                    H2K 4S1</p>
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
                            &copy; Untitled. Photos <a href="https://unsplash.co">Unsplash</a>, Video <a
                            href="https://coverr.co">Coverr</a>.
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
export default AddAdmin;
