// import React from 'react';
import React, {Component} from 'react';

import './assets/images/icons/favicon.ico';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/vendor/animate/animate.css';
import './assets/vendor/css-hamburgers/hamburgers.min.css';
import './assets/vendor/select2/select2.min.css';
import './assets/css/util.css';
import './assets/css/main.css';
import Logo from './assets/images/logo/isiNewCapture2.PNG';
let http = require('https');

const api = {                                                           //required credentials to get data from discogs api
    base: ""
};
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            isValid: false

        }
    }

    login(email, pass){
        console.warn(this.state);
        //const selectedTrackId = trackId;
        console.log("pwd is "+this.state.pass)
        const message = {
            email: this.state.email,
            pwd: this.state.pass
        };
        alert("ok");

        let validUserPostOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(message)
            },
            body: JSON.stringify(message)
        };

        return fetch('https://connect-isi.herokuapp.com/isvaliduser', validUserPostOptions).then(response => {
            if(response.status === 200){
                console.log("valid");
                this.setState({
                    isValid: true
                })
            }else{
                console.log("notValid");
                this.setState({
                    isValid: false
                })
            }
        });
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
                      <input className="input100" onChange={(event)=>this.setState({email:event.target.value})} type="text" name="email" placeholder="Email"/>
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

export default App;
