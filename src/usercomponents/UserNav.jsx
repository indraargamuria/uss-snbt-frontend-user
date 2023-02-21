import React, { Component, Fragment } from 'react';
// import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';

class UserNav extends Component {

    handleNavPage = (setPage) => {
        console.log(setPage)
    }

    render(){
        return <Fragment>
            <div className="nav">
                <div className="navleftblankspace"></div>
                <div className="navleft">
                    <div className="logo">
                        <img src="http://uss-utbk.com/img/logoussnewnotext.f25b4541.png" alt="" />
                    </div>
                </div>
                <div className="navmid"></div>
                <div className="navright">
                    <ul className="navmenu">
                        <li><a href="/" className={this.props.page === "/" ? "navbutton-active" :  "navbutton-inactive"}>BERANDA</a></li>
                        <li><a href="/catalog" className={this.props.page === "/catalog" ? "navbutton-active" :  "navbutton-inactive"}>KATALOG</a></li>
                        <li><a href="/dashboard"  className={this.props.page === "/dashboard" ? "navbutton-active" :  "navbutton-inactive"}>DASBOR SISWA</a></li>
                    </ul>
                    <ul className="navicon">
                        <li><i><FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon></i></li>
                    </ul>
                </div>
                <div className="navrightblankspace"></div>
            </div>
        </Fragment>
    }
}

export default UserNav;