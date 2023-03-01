import React, { Component, Fragment } from 'react';
// import './UserDashboard.css';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';

class UserDashboard extends Component {
    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/dashboard"></UserNav>
            
        </Fragment>
    }
}

export default UserDashboard;