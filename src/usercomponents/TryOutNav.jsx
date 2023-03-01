import React, { Component, Fragment } from 'react';
// import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class TryOutNav extends Component {
    render(){
        return <Fragment>
            <div className="question-navbox">
                <div className="question-navbox-wrapper">

                    <div className="question-answer-typeone">-</div>
                    <div className={this.props.active == 1 ? "question-number-active" : "question-number-inactive"}>{this.props.qnum}</div>
                </div>
            </div>
        </Fragment>
    }
}

export default TryOutNav;