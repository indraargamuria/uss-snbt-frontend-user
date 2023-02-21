import React, { Component, Fragment } from 'react';
// import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

class Hero extends Component {
    render(){
        return <Fragment>
            <div className="hero">
                <div className="heroleftblankspace"></div>
                <div className="heroleft">
                    
                    <div className="maintagline">Platform Try Out <span className="maintagline-outlined">USS SNBT</span> 2023</div>
                    <div className="maintagline">Try Out <b>Asyik</b> dengan Soal <b>Menantang</b> <i><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></i></div>
                    <div className="secondarytagline">Tingkatkan Kesempatan Kamu Masuk PTN Favorit <i><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></i></div>
                    <div className="tagpoint-title"><span className="secondarytagline-outlined">Keunggulan USS SNBT</span></div>
                    <div className="tagpoint-list">
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Paket Soal Menarik & Up to Date</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Soal di Riset Langsung Oleh Lulusan PTN Favorit</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faBoxesStacked}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Pola Soal sesuai Standarisasi SNBT</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Formulasi Penilaian sesuai Standarisasi Kemendikbud</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Bank Data PTN dan Prodi yang Sangat Lengkap</div>
                        </div>
                    </div>
                </div>
                <div className="heromid">
                    <div className="heroimage">
                        <img src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=900&t=st=1676313889~exp=1676314489~hmac=69551bd2c4e33214bd7dd1262676d179fba4f4bd862606c0524157db2dbe146c" alt="" />
                    </div>
                    <div className="maintagline">Platform Try Out <span className="maintagline-outlined">USS SNBT</span> 2023</div>
                    <div className="maintagline">Try Out <b>Asyik</b> dengan Soal <b>Menantang</b> <i><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></i></div>
                    <div className="secondarytagline">Tingkatkan Kesempatan Kamu Masuk PTN Favorit <i><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></i></div>
                    <div className="tagpoint-title"><span className="secondarytagline-outlined">Keunggulan USS SNBT</span></div>
                    <div className="tagpoint-list">
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Paket Soal Menarik & Up to Date</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Soal di Riset Langsung Oleh Lulusan PTN Favorit</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faBoxesStacked}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Pola Soal sesuai Standarisasi SNBT</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Formulasi Penilaian sesuai Standarisasi Kemendikbud</div>
                        </div>
                        <div className="tagpoint-listcontent">
                            <div className="tagpoint-listbullet"><i><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></i></div>
                            <div className="tagpoint-listdescription">Bank Data PTN dan Prodi yang Sangat Lengkap</div>
                        </div>
                    </div>
                </div>
                <div className="heroright">
                    <div className="heroimage">
                        <img src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=900&t=st=1676313889~exp=1676314489~hmac=69551bd2c4e33214bd7dd1262676d179fba4f4bd862606c0524157db2dbe146c" alt="" />
                    </div>
                </div>
                <div className="herorightblankspace"></div>
            </div>
        </Fragment>
    }
}

export default Hero;