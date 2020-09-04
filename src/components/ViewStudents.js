import React, {Component} from 'react';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Logo from '../assets/images/logo/applogo.png';
//import '../assets/css/main.css';
class ViewStudents extends Component{

    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        // const options = {
        //     method: "GET",
        //     body:JSON.stringify({
        //
        //     }),
        //     headers: {
        //         "Content-Type":'application/json'
        //     }
        // }
        const response = await fetch('https://connect-isi.herokuapp.com/getuserbytype?u_type=3')
        const data = await response.json();
        this.setState({
            data: data
        })
        console.log("data",this.state.data);
        console.log("type od data "+typeof this.state.data);
    }
    deleteTeacher = id => {                                    //addToTracks arrow function to make api to add new tracks in the database track table
        // const data = {
        //     id: this.state.f_name
        // }
        console.log("id"+id)
        const data = {
            method: "DELETE",
            body:JSON.stringify({
                id:id
            }),
            headers: {
                "Content-Type":'application/json'
            }
        }
        console.log("I am going to delete "+data.body.id)
        let action = axios.delete('https://connect-isi.herokuapp.com/deleteuserbyid',data).then(response => {
            console.log("inside axios");
            console.log(response);
            if(response.status !== 200){
                console.log('Record does not Deleted successfully.');
                this.setState({
                    message: 'Record does not Deleted successfully.',
                    flag: '0'
                });
            }else if(response.status === 200){
                console.log("Record Deleted Successfully.");
                this.setState({
                    message: 'Record Deleted successfully.',
                    flag: '1'
                });
            }
        });
    };
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
                        <Link to="/StudentsDashboard"><a>Dashboard</a></Link>
                        <Link to="/StudentsProfile"><a>Profile</a></Link>
                        <Link to="/"><a>Logout</a></Link>
                        {/*<a href="#menu">Menu</a>*/}
                        {/*<a href="#menu">Menu</a>*/}
                    </nav>
                </header>

                {/*// <!-- Nav -->*/}
                <nav id="menu">
                    <ul class="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="elements.html">Elements</a></li>
                        <li><a href="generic.html">Generic</a></li>
                    </ul>
                </nav>

                {/*// <!-- Heading -->*/}
                <div id="heading" >
                    <h1>Admins</h1>
                </div>



                {/*// <!-- Main -->*/}
                <section id="main" class="wrapper">
                    <div class="inner">
                        <div class="content">
                            <header>
                                <h2>List of Admins</h2>
                            </header>
                            {/*// <!-- Table -->*/}

                            <div class="table-wrapper">
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h3>First Name</h3></th>
                                        <th><h3>Last Name</h3></th>
                                        <th><h3>Delete</h3></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { this.state.data.map((row,index) =>
                                        <tr key={index}>
                                            <p hidden={true}>{row.id}</p>
                                            <td><b>{row.f_name}</b></td>
                                            <td>{row.l_name}</td>
                                            <td>
                                                <ul class="actions">
                                                    <li>
                                                        <button class="button primary" value={row.id}  onClick={(param)=>this.deleteTeacher(param.currentTarget.value)}>
                                                            <i className="fa fa-trash" aria-hidden="true"></i></button></li>

                                                </ul>
                                            </td>
                                        </tr>
                                    )}

                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colspan="2"></td>

                                    </tr>
                                    </tfoot>
                                </table>
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
export default ViewStudents;
