import React, {Component} from 'react';
import Menu from "./Menu";
import {Link} from "react-router-dom";
import teahersPic from "../assets/images/pic03.jpg";
import axios from "axios";
import Logo from '../assets/images/logo/applogo.png';
//import '../assets/css/main.css';
class CreateFeedbackPoll extends Component{

    constructor() {
        super();
        this.state = {
            question:'',
            option1:'',
            option2:'',
            option3:'',
            question_id: ''
        }
    }
    handleSubmit = (e) =>{
        console.log("handleSubmit");
        const question = {
            question: this.state.question,
        }

        axios.post('https://connect-isi.herokuapp.com/addquestion',question)
            .then(response => {
            console.log("inside axios");
            console.log(response);
            this.setState({
                question_id: response.data.id
            })
        }).then(
            async (id) => {
                const answerdata = {
                    method: "POST",
                    body:JSON.stringify({
                        question_id: this.state.question_id,
                        //question_id: 25,
                        answer: this.state.option1,
                        // option2: this.state.option2,
                        // option3: this.state.option3
                    }),
                    headers: {
                        "Content-Type":'application/json'
                    }
                }
                const data = await fetch('https://connect-isi.herokuapp.com/addoption',answerdata);
                //const result = await data.json();
                //console.log(result);
            }
        ).then(async (id) => {
            const answerdata = {
                method: "POST",
                body:JSON.stringify({
                    question_id: this.state.question_id,
                    //question_id: 25,
                    answer: this.state.option2
                    //option3: this.state.option3
                }),
                headers: {
                    "Content-Type":'application/json'
                }
            }
            const data = await fetch('https://connect-isi.herokuapp.com/addoption',answerdata);
        }).then(async (id) => {
            const answerdata = {
                method: "POST",
                body:JSON.stringify({
                    question_id: this.state.question_id,
                    answer: this.state.option3
                }),
                headers: {
                    "Content-Type":'application/json'
                }
            }
            const data = await fetch('https://connect-isi.herokuapp.com/addoption',answerdata);
            //const result = await data.json();
            //console.log(result);
            if(data.status !== 200){
                console.log('Feedback poll does not created successfully.');
                this.setState({
                    message: 'Feedback poll does not created successfully.',
                    flag: '0'
                });
            }else {
                console.log("Feedback poll created Successfully.");
                this.setState({
                    message: 'Feedback poll created successfully.',
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
                    <h1>Create Feedback Poll</h1>
                </div>

                {/*// <!-- Main -->*/}
                <section id="main" className="wrapper">
                    <div className="inner">
                        <div className="content">
                            <form>
                                <div className="row">
                                    <div className="col-12 col-12-xsmall">
                                        <input type="text" name="question" id="question" value={this.state.question} onChange={this.onChange.bind(this)} placeholder="Feedback question?"/>
                                    </div>
                                </div><br/>
                                <div className="row">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="option1" id="option1" value={this.state.option1} onChange={this.onChange.bind(this)} placeholder="Options for answers."/>
                                    </div>
                                    {/*<div className="col-6 col-12-xsmall">*/}
                                    {/*    <input type="submit" value="Add Option" className="primary"/>*/}
                                    {/*</div>*/}
                                </div><br/>
                                <div className="row">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="option2" id="option2" value={this.state.option2} onChange={this.onChange.bind(this)} placeholder="Options for answers."/>
                                    </div>
                                    {/*<div className="col-6 col-12-xsmall">*/}
                                    {/*    <input type="submit" value="Delete Option" className="primary"/>*/}
                                    {/*</div>*/}
                                </div><br/>
                                <div className="row">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="option3" id="option3" value={this.state.option3} onChange={this.onChange.bind(this)} placeholder="Options for answers."/>
                                    </div>
                                </div><br/><br/><br/>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><button type="button" className="primary" onClick={this.handleSubmit.bind(this)}>Create Feedback</button></li>
                                            <li><input type="reset" value="Cancel"/></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <br/> {/* <i className="fas fa-times"></i> <i
                                            className="icon fa-check"></i>&nbsp;Record registered successfully.*/}
                                            <h6 style={{color: "#E21C21",fontSize: "1.2rem"}}>{this.state.message} </h6>
                                        </div>
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
export default CreateFeedbackPoll;
