import React, {Component} from 'react';

import '../assets/images/icons/favicon.ico';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../assets/vendor/animate/animate.css';
import '../assets/vendor/css-hamburgers/hamburgers.min.css';
import '../assets/vendor/select2/select2.min.css';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
// import '../assets/css/util.css';
// import '../assets/css/main-login.css';

import Logo from '../assets/images/logo/isiNewCapture2.PNG';
let flag = false
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pass: '',
            message: ''
        }
    }

    login(email, pass) {
        //console.warn(this.state);
        //const selectedTrackId = trackId;
        // console.log("username is "+this.state.uname);
        // console.log("pwd is "+this.state.pass);
        const message = {
            u_name: this.state.uname,
            pwd: this.state.pass
        };

        axios.post('https://connect-isi.herokuapp.com/isvaliduser', message)
            .then(response => response.data.id)
            .then( async (id) => {
                        const options = {
                                        method: "POST",
                                        body:JSON.stringify({
                                            id
                                        }),
                                        headers: {
                                            "Content-Type":'application/json'
                                        }
                                    }
                                    const data = await fetch('https://connect-isi.herokuapp.com/getuserbyid',options);


                                    if(data.status === 200){
                                        const result = await data.json();
                                        sessionStorage.setItem('token',result[0].id);
                                        sessionStorage.setItem('data', result[0]);
                                        if(result[0].u_type === 1){
                                            console.log("Super Admin Logged In")
                                            this.props.history.push("/SuperadminDashboard", { data: result[0].id});
                                        }
                                        if(result[0].u_type === 2){
                                            console.log("Admin Logged In")
                                            this.props.history.push("/TeachersDashboard", { data: result[0].id});
                                        }
                                        if(result[0].u_type === 3){
                                            console.log("Admin Logged In")
                                            this.props.history.push("/StudentsDashboard", { data: result[0].id});
                                        }
                                    }else{
                                        flag = false;
                                        this.setState({
                                            message: 'Invalid Username / Password.'
                                        });
                                        console.log("Message",message)
                                       // sessionStorage.removeItem('token');
                                    }

            })
        //console.log("data is " + response.data.accessToken)
        //         if (response.data.accessToken != null) {
        //             // console.log("response. DATA",response.data)
        //             // console.log("yes");
        //             sessionStorage.setItem('token', response.data.accessToken);
        //
        //             if (sessionStorage.getItem('token')) {
        //                 let data = jwt_decode(sessionStorage.getItem('token'));
        //                 console.log("decoded data",data.id);
        //
        //                 const options = {
        //                     method: "POST",
        //                     body:JSON.stringify({
        //                         id: data.id
        //                     }),
        //                     headers: {
        //                         "Content-Type":'application/json'
        //                     }
        //                 }
        //                 //console.log("Fetched data is "+options.body.id)
        //                 const r = fetch('https://connect-isi.herokuapp.com/getuserbyid',options);
        //                 const responseData = r.json();
        //                 console.log("response",{response});
        //                 this.props.history.push("/SuperadminDashboard", { data: data});
        //             }
        //             flag = true
        //         }else{
        //             flag = false;
        //             this.setState({
        //                 message: 'Invalid Username / Password.'
        //             });
        //             sessionStorage.removeItem('token');
        //         }
        //     });
        // }
    }

    render() {

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt> {/*form starts*/}
                            <img src={Logo} alt="IMG"/>
                        </div>

                        <div className="login100-form validate-form">
					<span className="login100-form-title">
						Member Login
					</span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" onChange={(event)=>this.setState({uname:event.target.value})} type="text" name="uname" placeholder="Username"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" onChange={(event)=>this.setState({pass:event.target.value})} type="password" name="pass" placeholder="Password"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={()=>{this.login()}}>
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
                                <a className="txt2" href="#">
                                    Username / Password?
                                </a>
                            </div>

                            <div className="text-center p-t-12">
                                <br/>
                                <h6 style={{color: "#E21C21",fontSize: "1.2rem"}}>{this.state.message}</h6>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="#">
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div> {/*form Close*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
/*
*  //
            // console.log(response.data.accessToken)
            // if(sessionStorage.getItem('token')){
            //     console.log(jwt_decode(sessionStorage.getItem('token')))
            // }
        }) /*{
            if(response.status === 201){
                console.log("notValid");
                this.setState({
                    message: 'Invalid Username / Password.'
                })
            }else{
                console.log("valid");
                console.log(response.json() );
                //console.log(response.json().Object. );
                //console.log(response.json().PromiseValue. );
                //this.props.history.replace("/SuperadminDashboard", { detail: response.data});
                // this.props.history.push({
                //     pathname: '/SuperadminDashboard',
                //     search: '?query=data',
                //     state: { detail: response.data}
                // })

            }
        });*/