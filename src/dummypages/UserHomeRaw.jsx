import React, { Component, Fragment } from 'react';
import './UserHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faCalendarAlt, faCalendarCheck, faCalendarPlus, faCartPlus, faGraduationCap, faHamburger, faStar, faThumbsUp, faUniversity, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import TryOutTimeline from '../usercomponents/TryOutTimeline';

class UserHome extends Component {
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
                        <li><a href="/">BERANDA</a></li>
                        <li><a href="/katalog">KATALOG</a></li>
                        <li><a href="/dasborsiswa">DASBOR SISWA</a></li>
                    </ul>
                    <ul className="navicon">
                        <li><i><FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon></i></li>
                    </ul>
                </div>
                <div className="navrightblankspace"></div>
            </div>
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
                    <TryOutTimeline></TryOutTimeline>
                    <TryOutTimeline></TryOutTimeline>
                    {/* <div className="tryoutperiod">
                        <div className="tryoutperiod-icon">
                            <i><FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon></i>
                        </div>
                        <div className="tryoutperiod-status">
                            <span className="tryoutperiod-statusactive">Sedang Berjalan</span>
                        </div>
                        <div className="tryoutperiod-header">
                            Timeline Try Out SNBT #3

                        </div>
                        <div className="tryoutperiod-content">
                            <div className="tryoutperiod-contentlist">
                                <span>Pendaftaran TO</span>
                                <span>:</span>
                                <span>20 Februari 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengerjaan TO</span>
                                <span>:</span>
                                <span>24 Februari 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengumuman Nilai TO</span>
                                <span>:</span>
                                <span>27 Februari 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pembahasan Live Class</span>
                                <span>:</span>
                                <span>1 Maret 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="tryoutperiod">
                        <div className="tryoutperiod-icon">
                            <i><FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon></i>
                        </div>
                        <div className="tryoutperiod-status">
                            <span className="tryoutperiod-statusinactive">Agenda Berikutnya</span>
                        </div>
                        <div className="tryoutperiod-header">
                            Timeline Try Out SNBT #4

                        </div>
                        <div className="tryoutperiod-content">
                            <div className="tryoutperiod-contentlist">
                                <span>Pendaftaran TO</span>
                                <span>:</span>
                                <span>5 Maret 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengerjaan TO</span>
                                <span>:</span>
                                <span>9 Maret 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengumuman Nilai TO</span>
                                <span>:</span>
                                <span>12 Maret 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pembahasan Live Class</span>
                                <span>:</span>
                                <span>16 Maret 2023</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="inforight">
                    <TryOutTimeline></TryOutTimeline>
                    <TryOutTimeline></TryOutTimeline>
                    {/* <div className="tryoutperiod">
                        <div className="tryoutperiod-icon">
                            <i><FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon></i>
                        </div>
                        <div className="tryoutperiod-status">
                            <span className="tryoutperiod-statusactive">Sedang Berjalan</span>
                        </div>
                        <div className="tryoutperiod-header">
                            Timeline Try Out SNBT #3

                        </div>
                        <div className="tryoutperiod-content">
                            <div className="tryoutperiod-contentlist">
                                <span>Pendaftaran TO</span>
                                <span>:</span>
                                <span>20 Februari 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengerjaan TO</span>
                                <span>:</span>
                                <span>24 Februari 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengumuman Nilai TO</span>
                                <span>:</span>
                                <span>27 Februari 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pembahasan Live Class</span>
                                <span>:</span>
                                <span>1 Maret 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="tryoutperiod">
                        <div className="tryoutperiod-icon">
                            <i><FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon></i>
                        </div>
                        <div className="tryoutperiod-status">
                            <span className="tryoutperiod-statusinactive">Agenda Berikutnya</span>
                        </div>
                        <div className="tryoutperiod-header">
                            Timeline Try Out SNBT #4

                        </div>
                        <div className="tryoutperiod-content">
                            <div className="tryoutperiod-contentlist">
                                <span>Pendaftaran TO</span>
                                <span>:</span>
                                <span>5 Maret 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengerjaan TO</span>
                                <span>:</span>
                                <span>9 Maret 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pengumuman Nilai TO</span>
                                <span>:</span>
                                <span>12 Maret 2023</span>
                            </div>
                            <div className="tryoutperiod-contentlist">
                                <span>Pembahasan Live Class</span>
                                <span>:</span>
                                <span>16 Maret 2023</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="inforightblankspace"></div>
            </div>
            <div className="package">
                <div className="packageleftblankspace"></div>
                <div className="packageleft"></div>
                <div className="packagemid">
                    <div className="packagetitle">Paket Soal USS SNBT</div>
                    <div className="packagecontent">
                        <div className="packagebox">
                            <div className="packagebox-name">SNBT #1</div>
                            <div className="packagebox-image"><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1676387738~exp=1676388338~hmac=b979b4bf6f760d7164954b5e594dcc4fa270f03b996b85ac2ef53ee510ee3e6a" alt="" /></div>
                            <div className="packagebox-subtest">
                                <div className="packagebox-subtestcontent">
                                    <span className="packagebox-subtestcontent-group">Skolastik</span>
                                    <span>Kemampuan Penalaran Umum</span>
                                    <span>Pengetahuan dan Pemahaman Umum</span>
                                    <span>Kemampuan Memahami Bacaan dan Menulis</span>
                                    <span>Pengetahuan Kuantitatif</span>
                                    <span className="packagebox-subtestcontent-group">Literasi</span>
                                    <span>Literasi dalam Bahasa Indonesia</span>
                                    <span>Literasi dalam Bahasa Inggris</span>
                                    <span>Literasi Matematika</span>
                                </div>
                                
                            </div>
                            <div className="packagebox-footer">
                                <div className="packagebox-price"><span>Rp 200.000,-</span></div>
                                <div className="packagebox-navigation"><button><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                                </div>
                            </div>
                        </div>
                        <div className="packagebox">
                            <div className="packagebox-name">SNBT #2</div>
                            <div className="packagebox-image"><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1676387738~exp=1676388338~hmac=b979b4bf6f760d7164954b5e594dcc4fa270f03b996b85ac2ef53ee510ee3e6a" alt="" /></div>
                            <div className="packagebox-subtest">
                                <div className="packagebox-subtestcontent">
                                    <span className="packagebox-subtestcontent-group">Skolastik</span>
                                    <span>Kemampuan Penalaran Umum</span>
                                    <span>Pengetahuan dan Pemahaman Umum</span>
                                    <span>Kemampuan Memahami Bacaan dan Menulis</span>
                                    <span>Pengetahuan Kuantitatif</span>
                                    <span className="packagebox-subtestcontent-group">Literasi</span>
                                    <span>Literasi dalam Bahasa Indonesia</span>
                                    <span>Literasi dalam Bahasa Inggris</span>
                                    <span>Literasi Matematika</span>
                                </div>
                                
                            </div>
                            <div className="packagebox-footer">
                                <div className="packagebox-price"><span>Rp 200.000,-</span></div>
                                <div className="packagebox-navigation"><button><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                                </div>
                            </div>
                        </div>
                        <div className="packagebox">
                            <div className="packagebox-name">SNBT #3</div>
                            <div className="packagebox-image"><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1676387738~exp=1676388338~hmac=b979b4bf6f760d7164954b5e594dcc4fa270f03b996b85ac2ef53ee510ee3e6a" alt="" /></div>
                            <div className="packagebox-subtest">
                                <div className="packagebox-subtestcontent">
                                    <span className="packagebox-subtestcontent-group">Skolastik</span>
                                    <span>Kemampuan Penalaran Umum</span>
                                    <span>Pengetahuan dan Pemahaman Umum</span>
                                    <span>Kemampuan Memahami Bacaan dan Menulis</span>
                                    <span>Pengetahuan Kuantitatif</span>
                                    <span className="packagebox-subtestcontent-group">Literasi</span>
                                    <span>Literasi dalam Bahasa Indonesia</span>
                                    <span>Literasi dalam Bahasa Inggris</span>
                                    <span>Literasi Matematika</span>
                                </div>
                                
                            </div>
                            <div className="packagebox-footer">
                                <div className="packagebox-price"><span>Rp 200.000,-</span></div>
                                <div className="packagebox-navigation"><button><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                                </div>
                            </div>
                        </div>
                        <div className="packagebox">
                            <div className="packagebox-name">SNBT #4</div>
                            <div className="packagebox-image"><img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=740&t=st=1676387738~exp=1676388338~hmac=b979b4bf6f760d7164954b5e594dcc4fa270f03b996b85ac2ef53ee510ee3e6a" alt="" /></div>
                            <div className="packagebox-subtest">
                                <div className="packagebox-subtestcontent">
                                    <span className="packagebox-subtestcontent-group">Skolastik</span>
                                    <span>Kemampuan Penalaran Umum</span>
                                    <span>Pengetahuan dan Pemahaman Umum</span>
                                    <span>Kemampuan Memahami Bacaan dan Menulis</span>
                                    <span>Pengetahuan Kuantitatif</span>
                                    <span className="packagebox-subtestcontent-group">Literasi</span>
                                    <span>Literasi dalam Bahasa Indonesia</span>
                                    <span>Literasi dalam Bahasa Inggris</span>
                                    <span>Literasi Matematika</span>
                                </div>
                                
                            </div>
                            <div className="packagebox-footer">
                                <div className="packagebox-price"><span>Rp 200.000,-</span></div>
                                <div className="packagebox-navigation"><button><i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i> Pesan</button>
                                </div>
                            </div>
                        </div>
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