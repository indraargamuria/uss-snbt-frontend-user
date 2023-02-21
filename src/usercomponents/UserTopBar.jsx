import React, { Component, Fragment } from 'react';
// import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class UserTopBar extends Component {
    render(){
        return <Fragment>
            <div className="top">
                <div className="topleftblankspace"></div>
                <div className="topleft">
                    <div className="socialmedia">
                        <div className="socialmedia-badge">
                            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                        </div>
                        <div className="socialmedia-badge">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                        </div>
                        <div className="socialmedia-badge">
                            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
                        </div>
                        <div className="socialmedia-badge">
                            <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" />
                        </div>
                        <div className="socialmedia-blankspace">

                        </div>
                    </div>
                 </div>
                <div className="topmid">
                    <div className="user">
                        ARGA
                    </div>
                    <div className="pfp">
                        <img src="https://media.licdn.com/dms/image/C4D03AQFBEmwpP5mIeA/profile-displayphoto-shrink_800_800/0/1655984562589?e=2147483647&v=beta&t=UrYK3RJ8LiJ70_eUUrESWb3_zVYaOv8VsWJdNcPcvYc" alt="" />
                    </div>
                </div>
                <div className="topright">
                    <div className="user">
                        ARGA    
                    </div>
                    <div className="pfp">
                        <img src="https://media.licdn.com/dms/image/C4D03AQFBEmwpP5mIeA/profile-displayphoto-shrink_800_800/0/1655984562589?e=2147483647&v=beta&t=UrYK3RJ8LiJ70_eUUrESWb3_zVYaOv8VsWJdNcPcvYc" alt="" />
                    </div>
                </div>
                <div className="toprightblankspace"></div>
            </div>
        </Fragment>
    }
}

export default UserTopBar;