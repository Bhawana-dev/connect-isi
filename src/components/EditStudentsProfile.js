import React, {Component} from 'react';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import profilePic from "../assets/images/pic02.jpg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Logo from '../assets/images/logo/isiNewCapture2.PNG';
//import '../assets/css/main.css';
class EditStudentsProfile extends Component{

    constructor() {
        super();
        this.state = {
            f_name: '',
            l_name: '',
            email:'',
            u_name: '',
            data:null,
            message:''
        }
    }
    async componentDidMount() {
        //let {id} = jwt_decode(sessionStorage.getItem('token'));
        let id = sessionStorage.getItem('token');
        const options = {
            method: "POST",
            body:JSON.stringify({
                id
            }),
            headers: {
                "Content-Type":'application/json'
            }
        }
        const response = await fetch('https://connect-isi.herokuapp.com/getuserbyid',options)
        const data = await response.json();
        this.setState({
            data: data[0]
        })
        console.log("dataa "+this.state.data.f_name)
    }
    handleUpdate = (e) =>{
        console.log("handleSubmit");
        if(this.state.f_name === '')
        {
            this.setState({
                f_name: this.state.data.f_name
            })
            console.log("fname",this.state.f_name)
        }else{
            console.log("f_name",this.state.f_name)
        }
        if(this.state.l_name === '')
        {
            this.setState({
                l_name: this.state.data.l_name
            })
            console.log("lname",this.state.l_name)
        }else{
            console.log("l_name",this.state.l_name)
        }
        if(this.state.u_name === '')
        {
            this.setState({
                u_name: this.state.data.u_name
            })
            console.log("uname",this.state.u_name)
        }else{
            console.log("u_name",this.state.u_name)
        }
        if(this.state.email === '')
        {
            this.setState({
                email: this.state.data.email
            })
            console.log("email",this.state.email)
        }else{
            console.log("email",this.state.email)
        }

        const data = {
            f_name: this.state.f_name,
            l_name: this.state.l_name,
            email: this.state.email,
            u_name: this.state.u_name,
            // u_pwd: this.state.password,
            // u_type: 1
        }
        console.log("update"+{data})
        let action = axios.post('https://connect-isi.herokuapp.com/updateuser',data).then(response => {
            console.log("inside axios");
            if(response.status !== 200){
                console.log('Record does not Updated successfully.');
                this.setState({
                    message: 'Record does not Updated successfully.',
                    flag: '0'
                });
            }else if(response.status === 200){
                console.log("Record Updated Successfully.");
                this.setState({
                    message: 'Record Updated successfully.',
                    flag: '1'
                });
            }
        });
    }
    onChange(e) {
        //console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return this.state.data?(
                <div>
                    {/*<Menu/>*/}
                    {/*// <!-- Header -->*/}
                    <header id="header">
                        <a className="logo" href="/SuperadminDashboard">
                            <img src={Logo} style={{width: "13em"}}/>
                        </a>
                        <nav>
                            <Link to="/StudentsDashboard"><a>Dashboard</a></Link>
                            <Link to="/StudentsProfile"><a>Profile</a></Link>
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
                        <h1>Edit Profile</h1>
                    </div>

                    {/*// <!-- Main -->*/}
                    <section id="main" className="wrapper">
                        <div className="inner">
                            <div className="content">
                                <form>
                                    <h2>Edit your Profile</h2>
                                    {/*<h4><b>Upload Picture</b></h4>*/}
                                    {/*<input type="file" id="inputImage" name="photo"/><br/><br/>*/}

                                    {/*<h4><b>Gender</b></h4>*/}
                                    {/*<input type="radio" id="male" name="gender" value="male" checked={true} />*/}
                                    {/*<label for="male">Male</label><br/>*/}
                                    {/*<input type="radio" id="female" name="gender" value="female"/>*/}
                                    {/*<label for="female">Female</label><br/>*/}
                                    {/*<input type="radio" id="other" name="gender" value="other"/>*/}
                                    {/*<label for="other">Other</label>*/}

                                    <div className="row gtr-uniform">
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="f_name" id="f_name" value={this.state.f_name} placeholder="First Name" onChange={this.onChange.bind(this)}/>

                                        </div>
                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="l_name" id="l_name"  value={this.state.l_name} placeholder="Last Name" onChange={this.onChange.bind(this)}/>

                                        </div>

                                        <div className="col-6 col-12-xsmall">
                                            <input type="text" name="u_name" id="u_name" value={this.state.u_name} placeholder="Username" onChange={this.onChange.bind(this)}/>
                                        </div>

                                        {/*<div className="col-6 col-12-xsmall">*/}
                                        {/*    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value="514 430 5264"/>*/}
                                        {/*</div>*/}

                                        <div className="col-6 col-12-xsmall">
                                            <input type="email" name="email" id="email" value={this.state.email} placeholder="Email" onChange={this.onChange.bind(this)}/>
                                        </div>
                                        {/*<div className="col-6 col-12-xsmall">*/}
                                        {/*    <input type="password" name="oldPassword" placeholder="Old Password" value=""/>*/}
                                        {/*</div>*/}
                                        {/*<div className="col-6 col-12-xsmall">*/}
                                        {/*    <input type="password" name="newPassword"  placeholder="New Password" value=""/>*/}
                                        {/*</div>*/}

                                        {/*<div className="col-6 col-12-xsmall">*/}
                                        {/*    <input type="text" name="address" id="address" value="Montreal"/>*/}
                                        {/*</div>*/}

                                        {/*<div className="col-6 col-12-xsmall">*/}
                                        {/*    <input type="text" name="address2" id="address2" value=""/>*/}
                                        {/*</div>*/}

                                        {/*<div className="col-6 col-12-xsmall">*/}
                                        {/*    <input type="text" name="postalcode" id="postalcode" value="B3D 1C5"/>*/}
                                        {/*</div>*/}
                                        {/*<div className="col-12">
                                        <textarea name="textarea" id="textarea"
                                                  rows="6"></textarea>
                                    </div>*/}
                                        {/*// <!-- Break -->*/}
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><button type="button" className="primary" onClick={this.handleUpdate.bind(this)}>Update</button></li>
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
            ):

            (<h1>LOADING</h1>)
    }

}
export default EditStudentsProfile;
