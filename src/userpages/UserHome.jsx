import React, { Component, Fragment } from 'react';
import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import TryOutTimeline from '../usercomponents/TryOutTimeline';
import Hero from '../usercomponents/Hero';
import UserNav from '../usercomponents/UserNav';
import UserTopBar from '../usercomponents/UserTopBar';
import PackageBoxOrder from '../usercomponents/PackageBoxOrder';

class UserHome extends Component {
    state = {
        tryout_timeline: [
            {
                id: 1,
                status: 'Sedang Berjalan',
                header: 'Timeline Try Out SNBT #6',
                register: '16 Februari 2023',
                activity: '24 Februari 2023',
                announcement: '28 Februari 2023',
                liveclass: '1 Maret 2023'
            },
            {
                id: 2,
                status: 'Agenda Berikutnya',
                header: 'Timeline Try Out SNBT #7',
                register: '26 Februari 2023',
                activity: '3 Maret 2023',
                announcement: '7 Maret 2023',
                liveclass: '8 Maret 2023'
            }
        ],
        package: [
        ],
        modal_nav: 0
    }
    componentDidMount() {
        fetch('https://backend.uss-utbk.com/package')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => {
            this.setState({
                package: json.values
            },() => console.log(this.state.package))
        })
        console.log(this.state.tryout_timeline)
    }
    render(){
        return <Fragment>
            <div className={this.state.modal_nav === 1 ? 'modalbox-nav display' :  'modalbox-nav hide'}>
                <div className="modalbox-nav-wrapper">
                    
                </div>
            </div>
            <UserTopBar></UserTopBar>
            <UserNav page="/"></UserNav>
            <Hero></Hero>
            <div className="info">
                <div className="infoleftblankspace"></div>
                <div className="infoleft">
                    <div className="infoimage">
                        <img src="https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10211.jpg?w=996&t=st=1676355657~exp=1676356257~hmac=0fd4d9362ca20588478ff19632af3ab2e0b9ebc672997ded6a70e5bd2efcc897" alt="" />
                    </div>
                </div>
                <div className="infomid">
                    <div className="infoimage">
                        <img src="https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10211.jpg?w=996&t=st=1676355657~exp=1676356257~hmac=0fd4d9362ca20588478ff19632af3ab2e0b9ebc672997ded6a70e5bd2efcc897" alt="" />
                    </div>
                    {this.state.tryout_timeline.map(datalist => {
                        return <TryOutTimeline 
                            key={datalist.id}
                            status={datalist.status}
                            header={datalist.header}
                            register={datalist.register}
                            activity={datalist.activity}
                            announcement={datalist.announcement}
                            liveclass={datalist.liveclass}
                        />
                    })}
                </div>
                <div className="inforight">
                    {this.state.tryout_timeline.map(datalist => {
                        return <TryOutTimeline 
                            key={datalist.id}
                            status={datalist.status}
                            header={datalist.header}
                            register={datalist.register}
                            activity={datalist.activity}
                            announcement={datalist.announcement}
                            liveclass={datalist.liveclass}
                        />
                    })}
                </div>
                <div className="inforightblankspace"></div>
            </div>
            <div className="package">
                <div className="packageleftblankspace"></div>
                <div className="packageleft"></div>
                <div className="packagemid">
                    <div className="packagetitle">Paket Soal USS SNBT</div>
                    <div className="packagecontent">
                    {this.state.package.map(datalist => {
                        return <PackageBoxOrder 
                            key={datalist.packageID}
                            name={datalist.packageCode}
                            price={datalist.packagePriceDisplay}
                        />
                    })}
                    {this.state.package.map(datalist => {
                        return <PackageBoxOrder 
                            key={datalist.packageID}
                            name={datalist.packageCode}
                            price={datalist.packagePriceDisplay}
                        />
                    })}
                    </div>
                </div>
                <div className="packageright"></div>
                <div className="packagerightblankspace"></div>
            </div>
            <div className="testimonial">
                
            </div>
            <div className="affiliate">

            </div>
            <div className="footer">

            </div>
        </Fragment>
    }
}

export default UserHome;