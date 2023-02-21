import React, { Component, Fragment } from 'react';
// import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class TryOutTimeline extends Component {
    render(){
        return <Fragment>
            <div className="tryoutperiod">
                <div className="tryoutperiod-icon">
                    <i><FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon></i>
                </div>
                <div className="tryoutperiod-status">
                    <span className={this.props.status == "Sedang Berjalan" ? "tryoutperiod-statusactive" :  "tryoutperiod-statusinactive"}>{this.props.status}</span>
                </div>
                <div className="tryoutperiod-header">
                    {this.props.header}

                </div>
                <div className="tryoutperiod-content">
                    <div className="tryoutperiod-contentlist">
                        <span>Pendaftaran TO</span>
                        <span>:</span>
                        <span>{this.props.register}</span>
                    </div>
                    <div className="tryoutperiod-contentlist">
                        <span>Pengerjaan TO</span>
                        <span>:</span>
                        <span>{this.props.activity}</span>
                    </div>
                    <div className="tryoutperiod-contentlist">
                        <span>Pengumuman Nilai TO</span>
                        <span>:</span>
                        <span>{this.props.announcement}</span>
                    </div>
                    <div className="tryoutperiod-contentlist">
                        <span>Pembahasan Live Class</span>
                        <span>:</span>
                        <span>{this.props.liveclass}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default TryOutTimeline;