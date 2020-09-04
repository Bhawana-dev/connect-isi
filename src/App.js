import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SuperadminDashboard from './components/SuperadminDashboard';

import Profile from "./components/./Profile";
import ViewAdmins from "./components/./ViewAdmins";
import AddAdmin from "./components/AddAdmin";
import Login from "./components/Login";
import Menu from "./components/./Menu";

//
// import './assets/images/icons/favicon.ico';
// import './assets/vendor/bootstrap/css/bootstrap.min.css';
// import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
// import './assets/vendor/animate/animate.css';
// import './assets/vendor/css-hamburgers/hamburgers.min.css';
// import './assets/vendor/select2/select2.min.css';
// import './assets/css/util.css';
import './assets/css/main.css';
import Logo from './assets/images/logo/isiNewCapture2.PNG';
import EditAdminProfile from "./components/EditAdminProfile";
import VotingPollResults from "./components/VotingPollResults";
import CreateVotingPoll from "./components/CreateVotingPoll";
import CreateFeedbackPoll from "./components/CreateFeedbackPoll";
import FeedbackResults from "./components/FeedbackResults";
import TeachersDashboard from "./components/TeachersDashboard";
import TeachersProfile from "./components/TeachersProfile";
import AddStudents from "./components/AddStudents";
import StudentsDashboard from "./components/StudentsDashboard";
import ViewVotingPolls from "./components/ViewVotingPolls";
import ViewFeedbackPolls from "./components/ViewFeedbackPolls";
import StudentsProfile from "./components/StudentsProfile";
import EditStudentsProfile from "./components/EditStudentsProfile";
import EditTeachersProfile from "./components/EditTeachersProfile";
import ViewStudents from "./components/ViewStudents";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pass: '',
            message: ''
        }
    }

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        {/*start of super admin panel routes*/}
                        <Route path="/SuperadminDashboard" exact component={SuperadminDashboard} />
                        <Route path="/AddAdmin" exact component={AddAdmin} />
                        <Route path="/Profile" component={Profile} />
                        <Route path="/ViewAdmins" component={ViewAdmins} />
                        <Route path="/EditAdminProfile" component={EditAdminProfile}/>
                        <Route path="/VotingPollResults" component={VotingPollResults}/>
                        <Route path="/CreateVotingPoll" component={CreateVotingPoll}/>
                        <Route path="/CreateFeedbackPoll" component={CreateFeedbackPoll}/>
                        <Route path="/FeedbackResults" component={FeedbackResults}/>
                        <Route path="/Logout" component={Login} />
                        {/*end of super admin panel routes*/}
                        {/*start of Teachers panel routes*/}
                        <Route path="/TeachersDashboard" exact component={TeachersDashboard} />
                        <Route path="/TeachersProfile" exact component={TeachersProfile} />
                        <Route path="/AddStudents" exact component={AddStudents} />
                        <Route path="/EditTeachersProfile" exact component={this.EditTeachersProfile} />
                        {/*end of Teachers panel routes*/}
                        {/*start of student panel routes*/}
                        <Route path="/StudentsDashboard" exact component={StudentsDashboard} />
                        <Route path="/StudentsProfile" exact component={StudentsProfile} />
                        <Route path="/EditStudentsProfile" exact component={EditStudentsProfile} />
                        <Route path="/ViewVotingPolls" exact component={ViewVotingPolls} />
                        <Route path="/ViewFeedbackPolls" exact component={ViewFeedbackPolls} />
                        <Route path="/ViewStudents" exact component={ViewStudents} />
                        {/*end of super admin panel routes*/}
                        <Route path="/" component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
