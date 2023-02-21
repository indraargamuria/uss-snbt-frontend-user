import React, { Component, Fragment } from 'react';
// import './UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import TryOutTimeline from '../usercomponents/TryOutTimeline';
import Hero from '../usercomponents/Hero';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import PackageBoxOrder from '../usercomponents/PackageBoxOrder';

class UserDashboard extends Component {
    render(){
        return <Fragment>
            <UserTopBar></UserTopBar>
            <UserNav page="/dashboard"></UserNav>
            
        </Fragment>
    }
}

export default UserDashboard;