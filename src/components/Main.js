// import React, {useState} from 'react';
// import {BrowserRouter, Route, Switch } from 'react-router-dom';
// import SuperadminDashboard from './components/SuperadminDashboard';
// import AddAdmin from "./AddAdmin";
// import Profile from "./Profile";
// import ViewAdmins from "./ViewAdmins";
// import Menu from "./Menu";
//
// function Main() {
//     return (
//         <BrowserRouter>                                                 //BrowserRouter is a Router component to make routes
//             <div className="">
//                 <Menu/>
//                 <SuperadminDashboard/>
//                 <Switch>                                                //Switch will help to run the particular Route according to the call
//                     <Route path="/SuperadminDashboard" exact component={SuperadminDashboard} />           //Route is a Route matching component that will call particular component according to the path
//                     <Route path="/AddAdmin" exact component={AddAdmin} />
//                     <Route path="/Profile" component={Profile} />
//                     <Route path="/ViewAdmins" component={ViewAdmins} />
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     );
// }
//
// export default Main;
