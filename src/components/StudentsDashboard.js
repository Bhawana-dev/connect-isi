import React, {Component} from 'react';
//import '../assets/css/main.css';
import {Link} from "react-router-dom";
import Logo from '../assets/images/logo/applogo.png';
import Menu from "./Menu";
// import '../assets/css/main.css';
class StudentsDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // console.log("AccessToken",this.props.location.state.data)
    }

    render()
    {
        return (
            <>
                {/*<Menu/>*/}
                <header id="header" style={{height:"57px"}}>
                    <a className="logo" href="index.html">
                        <img src={Logo} style={{width: "13em"}}/>
                    </a>
                    <nav>
                        <Link to="/StudentsDashboard"><a>Dashboard</a></Link>
                        <Link to="/StudentsProfile"><a>Profile</a></Link>
                        <Link to="/"><a>Logout</a></Link>
                        {/*<a href="#menu">Menu</a>*/}
                    </nav>
                </header>
                <nav id="menu">
                    <ul className="links">
                        <li><a href="elements.html">Elements</a></li>

                        <a>Logout</a>   <li><a href="generic.html">Generic</a></li>
                    </ul>
                </nav>

                {/*// <!-- Banner -->*/}
                {/*// <!--<section id="banner">-->*/}
                {/*// <!--    <div class="inner">-->*/}
                {/*// <!--        <h1>Industrious</h1>-->*/}
                {/*// <!--        <p>A responsive business oriented template with a video background<br />-->*/}
                {/*// <!--            designed by <a href="https://templated.co/">TEMPLATED</a> and released under the Creative Commons License.</p>-->*/}
                {/*// <!--    </div>-->*/}
                {/*// <!--    <video autoplay loop muted playsinline src="images/banner.mp4"></video>-->*/}
                {/*// <!--</section>-->*/}

                {/*// <!-- Heading -->*/}
                <div id="heading">
                    <h1>The Dashboard</h1>
                </div>

                {/*// <!-- Highlights -->*/}
                <section className="wrapper">
                    <div className="inner">
                        <header className="special">
                            <h2>Welcome to ISI Connect</h2>
                            {/*// <!--            <p></p>-->*/}
                        </header>
                        <div className="highlights">

                            <section>
                                <div className="content">
                                    <header>
                                        <Link to="/StudentsProfile" className="icon fa-vcard-o"><span
                                            className="label">Icon</span></Link>
                                        <h3>View Profile</h3>
                                    </header>
                                    <p>You can see and can update your profile.</p>
                                </div>
                            </section>
                            <section>
                                <div className="content">
                                    <header>
                                        <Link to="/ViewVotingPolls" className="icon fas fa-star"><span className="label">Icon</span></Link>
                                        <h3>See Voting Polls</h3>
                                        <p>You can see the results of voting polls.</p>
                                    </header>
                                    <p></p>
                                </div>
                            </section>
                            <section>
                                <div className="content">
                                    <header>
                                        <Link to="/ViewFeedbackPolls" className="icon fas fa-reply"><span
                                            className="label">Icon</span>
                                            <h3>See Feedback Polls</h3></Link>
                                    </header>
                                    <p>You can create voting Poll about teachers.</p>
                                </div>
                            </section>
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
            </>
        );
    }
}

const styles = {

}

export default StudentsDashboard;
